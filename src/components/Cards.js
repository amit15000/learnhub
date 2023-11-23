import React from "react";
import Card from "./Card";

function Cards({ courses }) {
  const getCourses = () => {
    if (!courses || typeof courses !== "object") {
      // Handle the case where courses is undefined or not an object
      return [];
    }

    let allCourses = [];
    Object.values(courses).forEach((courseCategory) => {
      if (Array.isArray(courseCategory)) {
        courseCategory.forEach((courseData) => {
          allCourses.push(courseData);
        });
      }
    });
    return allCourses;
  };

  return (
    <div>
      {getCourses().map((course) => (
        <Card key={course.key} course={course}></Card>
      ))}
    </div>
  );
}

export default Cards;
