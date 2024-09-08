import { LOGO_URL } from "../utils/constans";

const CourseCard = ({ course }) => {
  console.log(course.id);
  return (
    <div className="border w-[340px] h-[340px] m-5 rounded-lg">
      <img className="rounded-t-lg" src={course.image_750x422} alt="logo" />
      <div className="m-3">
        <h2 className="font-bold">{course.title}</h2>

        <h3>{course.visible_instructors[0].display_name}</h3>

        <h3 className="mt-1 flex items-center">
          <img
            className="w-5 h-5 mr-2"
            src="https://cdn2.iconfinder.com/data/icons/greenline/512/star-512.png"
          />
          {course.rating.toFixed(1)}
          {course?.bestseller_badge_content?.badge_text && (
            <h3 className="ml-2 bg-yellow-200 p-1">
              {course.bestseller_badge_content.badge_text}
            </h3>
          )}
        </h3>
      </div>
    </div>
  );
};

export default CourseCard;
