import React from "react";
import { FcLike } from "react-icons/fc";

const Card = ({ course }) => {
  return (
    <div className="w-[300px] bg-blue-950 bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} alt={course.image.alt}></img>
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
          <button>
            <FcLike fontSize="1.7rem"></FcLike>
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
