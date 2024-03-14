import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, reset } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onsubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      const { email, password } = values;
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/user/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
          withCredentials: true,
        }
      );

      if (data.success) {
        toast.success(data.message);
        navigate("/dashboard");
        reset();
      }
    } catch (err: any) {
      toast.error(err.response?.data.message || "something wents wrong");
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
          Login
        </h1>
        <form className="mt-6" onSubmit={handleSubmit(onsubmit)}>
          <div className="mb-2">
            <label
              htmlFor="email"
              id="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <Input
              type="text"
              id="email"
              {...register("email", { required: true })}
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <Input
              type="password"
              id="password"
              {...register("password", { required: true })}
              placeholder="Enter Password"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a
            onClick={() => navigate("/register")}
            className="font-medium text-purple-600 hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
