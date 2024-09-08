import { useSelector } from "react-redux";
import { useState } from "react";

const MyDashboard = () => {
  const [completedCourses, setCompletedCourses] = useState({});

  const handleButtonClick = (courseId) => {
    setCompletedCourses((prevCompleted) => ({
      ...prevCompleted,
      [courseId]: true,
    }));
  };

  const coursesList = useSelector((store) => store.dashboard.coursesList);

  console.log(coursesList);

  return (
    <div className="text-center mt-10">
      <h1 className="font-bold text-2xl mb-16">Courses Enrolled</h1>
      {coursesList?.length <= 0 ? (
        <h1 className="text-lg font-semibold">No Courses Enrolled</h1>
      ) : (
        <div className="m-auto w-6/12 shadow-lg rounded-xl p-3">
          <div className="">
            {coursesList?.map((course) => (
              <div key={course.id}>
                <div className="flex">
                  <img
                    className="w-[240px] rounded-lg"
                    src={course.image_750x422}
                    alt="logo"
                  />

                  <div className="my-3 mx-10">
                    <h1 className="font-semibold text-xl text-start p-1">
                      {course.title}
                    </h1>
                    <h2 className="font-medium text-start p-1">
                      Created by {course.visible_instructors[0].display_name}
                    </h2>
                    <div className="font-semibold text-start px-1 pt-5 flex justify-between items-center">
                      <div className="w-[170px]">
                        Duration: {course.content_info_short}
                      </div>
                      <button
                        className={`border-2 p-2 rounded-lg ml-[150px] ${
                          completedCourses[course.id]
                            ? "bg-green-500 text-white"
                            : ""
                        }`}
                        onClick={() => handleButtonClick(course.id)}
                      >
                        {completedCourses[course.id]
                          ? "Completed"
                          : "Mark as Complete"}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[800px] h-[2px] bg-slate-200 my-6 rounded-xl mx-1"></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyDashboard;
