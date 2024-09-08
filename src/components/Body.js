import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { COURSE_URL, COURSE_DETAIL_URL } from "../utils/constans";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
  const [coursesList, setCoursesList] = useState([]);

  const [filterCourse, setFilterCourse] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(COURSE_URL);
    const json = await data.json();
    console.log(json.unit.items);

    setCoursesList(json.unit.items);
    setFilterCourse(json.unit.items);
  };

  return filterCourse.length <= 0 ? (
    <Shimmer />
  ) : (
    <div className="p-5">
      <input
        type="text"
        className="w-[200px] h-8 border-2 rounded-md p-2 ml-16 "
        placeholder="Search Course"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="ml-2 border-2 p-[2px] rounded-md"
        onClick={() => {
          const filteredData = coursesList.filter(
            (course) =>
              course.title.toLowerCase().includes(searchText.toLowerCase()) ||
              course.visible_instructors[0].display_name
                .toLowerCase()
                .includes(searchText.toLowerCase())
          );
          setFilterCourse(filteredData);
        }}
      >
        Search
      </button>
      <div className="m-10 flex flex-wrap">
        {filterCourse.map((course) => (
          <Link key={course.id} to={"/course/" + course.id}>
            <CourseCard key={course.id} course={course} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
