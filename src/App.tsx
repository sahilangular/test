import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const Login = lazy(() => import("./pages/Login"));
  const Register = lazy(() => import("./pages/Register"));
  const Dashboard = lazy(() => import("./pages/Dashboard"));
  const Courses = lazy(() => import("./pages/Courses"));
  const Lecture = lazy(() => import("./pages/AlignLecture"));
  const AddLecture = lazy(() => import("./pages/Addlectures"));

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/lecture" element={<Lecture />} />
          <Route path="/addlecture/:id" element={<AddLecture />} />
        </Routes>
        <Toaster position="top-center" reverseOrder={false} />
      </Suspense>
    </Router>
  );
};

export default App;
