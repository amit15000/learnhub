import React from "react";
import { FcLike } from "react-icons/fc";

function Card({ course }) {
  return (
    <div>
      <div>
        <img src={course.image.url} alt={course.image.alt}></img>
        <button>
          <FcLike fontSize="1.7rem"></FcLike>
        </button>
      </div>
      <div>
        <p>{course.title}</p>
        <p>{course.description}</p>
      </div>
    </div>
  );
}

export default Card;
