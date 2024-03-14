import { useLocation, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const Addlectures = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation()
const id = pathname.split("/")[2];
  const [user, setUser] = useState<any>([]);
  const [userData, setUserData] = useState<string>();

  const { handleSubmit, register } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  console.log(userData)

  const onsubmit: SubmitHandler<FieldValues> = async (values) => {
    axios.post(`http://localhost:8080/api/v1/course/addlecture/${id}`,{
        name:values.name,
        description: values.description,
        instructor_name:userData    
    }).then((res)=>{
        toast.success(res.data.message)
        navigate('/dashboard');
    }).catch(err=>{
        toast.error(err.response?.data.message || err.message)
    })
  };

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/user/all").then((res) => {
      setUser(res.data.users);
      console.log(res)
    });
  }, []);

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
          Add Lecture
        </h1>
        <form className="mt-6" onSubmit={handleSubmit(onsubmit)}>
          <div className="mb-2">
            <label
              htmlFor="email"
              id="Name"
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
              htmlFor="description"
              className="block text-sm font-semibold text-gray-800"
            >
              description
            </label>
            <Input
              type="text"
              id="description"
              {...register("description", { required: true })}
              placeholder="Enter description"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-gray-800"
            >
              instructor
            </label>
            <select onChange={(e)=>setUserData(e.target.value)}>
                {
                   user.map((item:any,i:any)=>(
                    <option key={i} value={item.name}>{item.name}</option>
                   ))
                }
            </select>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Add lecture
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addlectures;
