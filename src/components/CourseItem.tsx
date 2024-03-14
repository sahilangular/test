import { useNavigate } from "react-router-dom";;

interface props {
  data: any;
}

const CourseItem = ({data}:props) => {

  const navigate = useNavigate()
  const navigateData=(id:any)=>{
    navigate(`/addlecture/${id}`)

  }

  return (
    <div
      className="
       relative 
       group 
       flex 
       w-[100%]
       flex-col 
       items-center 
       justify-center 
       rounded-md 
       overflow-hidden 
       gap-x-4
       top-[40%] left-[50%]
       bg-neutral-400/5 
        cursor-pointer
       hover:bg-neutral-400/10 
        transition 
        p-3
    "
    >
      <div className="relative aspect-auto w-full h-full rounded-md overflow-hidden">
        <img className="object-cover" src={data.image} alt=" course image" />
      </div>
      <div className="flex flex-col items-start w-full p-4 gap-y-1">
        <p className="font-semibold truncate w-full">{data.name}</p>
        <p className="text-neutral-400 text-sm pb-4 w-full truncate">{data.description}</p>
        <p className="text-neutral-400 text-sm pb-4 w-full truncate">{data.level}</p>
      </div>
      <button type="button" onClick={()=>navigateData(data._id)} className="bg-purple-400 border p-3 border-none">
      Add lecture
      </button>
    </div>
  );
};

export default CourseItem;
