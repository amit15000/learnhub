import React from "react";
import Card from "./Card";

function Cards(props) {
  let courses = props.courses;
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
        <Card key={course.id} course={course} />
      ))}
    </div>
  );
}

export default Cards;
