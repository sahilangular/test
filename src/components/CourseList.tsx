import axios from "axios";
import { useEffect, useState } from "react";
import CourseItem from "./CourseItem";
import Model from "./Model";

const CourseList = () => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/course/all")
      .then((res)=>{
        setCourse(res?.data.courses)
      })   
  }, []);
  console.log(course)
  return (
    <>
      <div className="flex justify-end mb-6">
        <button className="relative w-[15%] p-2 bg-neutral-500 top-3 rounded-md">
          <Model />
        </button>
      </div>
      <div
        className="grid 
  grid-cols-3 
  sm:grid-cols-3 
  md:grid-cols-3 
  lg:grid-cols-4 
  xl:grid-cols-5 
  2xl:grid-cols-8 
  gap-4 
  mt-4"
      >
        {course?.map((songs,i) => (
          <CourseItem key={i} data={songs} />
        ))}
      </div>
    </>
  );
};

export default CourseList;
