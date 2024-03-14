import { useEffect, useState } from "react";
import CourseItem from "./CourseItem";
import Input from "./Input";
import Model from "./Model";
import axios from "axios";

const coursedata = [
  {
    id: "1",
    name: "data",
    image:
      "https://images.pexels.com/photos/257309/pexels-photo-257309.jpeg?auto=compress&cs=tinysrgb&dpr",
    description: "This is a data science course",
    level: "higher",
    lecture: [],
  },
];

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
