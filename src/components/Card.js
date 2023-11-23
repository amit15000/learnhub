import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  const course = props.course;
  const likedCourses = props.likedCourses;
  const setLikedCourses = props.setLikedCourses;
  const clickHandler = () => {
    if (likedCourses.includes(course.id)) {
      //current course already liked

      //have to remove it
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like Removed");
    } else {
      //its first like
      if (likedCourses.lenght === 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Successfully Liked");
    }
  };

  return (
    <div className="w-[300px] bg-blue-950 bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} alt={course.image.alt}></img>
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.7rem"></FcLike>
            ) : (
              <FcLikePlaceholder fontSize="1.7rem"></FcLikePlaceholder>
            )}
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6 ">
          {course.title}
        </p>
        <p>{course.description}</p>
      </div>
    </div>
  );
};

export default Card;
