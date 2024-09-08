import { useState, useEffect } from "react";
import { COURSE_URL } from "../utils/constans";
import { useParams } from "react-router-dom";
import CaptionLanguage from "./CaptionLanguage";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { addCourses } from "../utils/redux/dashboardSlice";

const CourseDetail = () => {
  const [coursesList, setCoursesList] = useState([]);

  const { courseId } = useParams();

  const dispatch = useDispatch();

  const handleAddCourse = (course) => {
    dispatch(addCourses(course));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(COURSE_URL);
    const json = await data.json();

    const filteredData = json?.unit?.items.filter(
      (data) => data?.id == courseId
    );

    setCoursesList(filteredData);
  };

  return coursesList?.length <= 0 ? (
    <Shimmer />
  ) : (
    <div className="p-10">
      <div className="w-full  h-[500px] ">
        {coursesList?.length > 0 ? (
          <div className="flex justify-between">
            <div>
              <h1 className="text-3xl font-bold m-6">
                {coursesList[0]?.title}
              </h1>
              <h2 className="text-xl mx-6 font-medium">
                {coursesList[0]?.headline}
              </h2>
              <div className="flex m-6 items-center">
                <h3 className="">
                  {coursesList[0]?.rating?.toFixed(1)} Rating
                </h3>
                {coursesList[0]?.bestseller_badge_content?.badge_text && (
                  <h3 className="ml-2 bg-yellow-200 p-1">
                    {coursesList[0]?.bestseller_badge_content?.badge_text}
                  </h3>
                )}
              </div>
              <h3 className="ml-6 flex">
                Created by{" "}
                <div className="ml-2 text-blue-600 font-medium">
                  {coursesList[0]?.visible_instructors[0]?.display_name}
                </div>
              </h3>

              <h3 className="mx-6 my-4 flex">
                <div className="font-semibold mr-2"> Duration </div>
                {coursesList[0]?.content_info}
              </h3>
              <h3 className="mx-6 my-4 flex">
                <div className="font-semibold mr-2">Last Updated </div>
                {coursesList[0]?.last_update_date}
              </h3>

              <button
                className="bg-purple-500 p-3 w-[200px] rounded-lg mx-6 my-8 text-lg font-bold text-white"
                onClick={() => handleAddCourse(coursesList[0])}
              >
                Enroll
              </button>
            </div>
            <img
              className=""
              src={coursesList[0]?.image_750x422}
              alt={coursesList?.title}
            />
          </div>
        ) : (
          <h1>Fetching Data...</h1>
        )}
      </div>
      <div className="flex ">
        <div className=" mx-6 border-2 p-6 w-6/12 h-[220px]">
          <h1 className="text-2xl font-bold mb-5">Objectives of this Course</h1>
          <ul className="list-disc ml-4">
            {coursesList[0]?.objectives_summary?.map((obj) => (
              <li key={obj} className="my-2">
                {obj}
              </li>
            ))}
          </ul>
        </div>
        {coursesList[0] && <CaptionLanguage list={coursesList[0]} />}
      </div>
    </div>
  );
};

export default CourseDetail;
