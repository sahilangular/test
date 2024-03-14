import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"

interface props{
    label:string,
    path:string,
    active:boolean
}

const Labels = ({label,path,active}:props) => {
  return (
    <div className={twMerge(`w-full flex justify-start items-start p-3 rounded-md`,active && 'bg-neutral-200')}>
      <Link to={path} className="w-full text-start">
        <p className="text-black font-semibold uppercase">{label}</p>
      </Link>
    </div>
  )
}

export default Labels