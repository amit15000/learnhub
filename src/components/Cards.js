import React, { useState } from "react";
import Card from "./Card";

function Cards(props) {
  let courses = props.courses;
  const [likedCourses, setLikedCourses] = useState([]);
  const getCourses = () => {
    let allCourses = [];
    Object.values(courses).forEach((courseCategory) => {
      // console.log(courseCategory);
      courseCategory.forEach((courseData) => {
        allCourses.push(courseData);
      });
    });
    return allCourses;
  };
  getCourses();
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
}

export default Cards;
