import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const { reset, handleSubmit, register } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onsubmit: SubmitHandler<FieldValues> = async (values) => {
    const { name, email, password } = values;
    const { data } = await axios.post(
      "http://localhost:8080/api/v1/user/new",
      {
        name,
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (data.success) {
      toast.success(data.message);
      navigate('/')
      reset();
    } else {
      toast.error(data.message);
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
          register
        </h1>
        <form className="mt-6" onSubmit={handleSubmit(onsubmit)}>
          <div className="mb-2">
            <label
              htmlFor="Name"
              className="block text-sm font-semibold text-gray-800"
            >
              Name
            </label>
            <Input
              type="text"
              id="name"
              {...register("name", { required: true })}
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <Input
              type="text"
              id="email"
              {...register("email", { required: true })}
              placeholder="Email address"
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
              placeholder="Enter password"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
