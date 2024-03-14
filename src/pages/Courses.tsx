import CourseList from "../components/CourseList";
import DashBoardSideBar from "../components/DashBoardSideBar";

const Courses = () => {
  return (
    <div className="w-full min-w-[100vw] h-[100vh] overflow-y-auto">
      <div className="w-full h-full p-2 overflow-hidden flex flex-row gap-x-2">
        <div className="w-[15%] text-center pt-3 h-full bg-white rounded shadow overflow-hidden">
          <DashBoardSideBar />
        </div>
        <div className="w-[80%] h-full overflow-y-auto">
            <CourseList />
        </div>
      </div>
    </div>
  );
};

export default Courses;
