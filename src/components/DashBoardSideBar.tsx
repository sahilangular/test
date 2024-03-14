import { useMemo } from "react"
import { useLocation } from "react-router-dom"
import Labels from "./Labels"

const DashBoardSideBar = () => {
  const {pathname} = useLocation()
  const routes  = useMemo(()=>[
    {
      label:'Dashboard',
      path:"/dashboard",
      active : pathname  === "/dashboard" ? true:false,
    },
    {
      label:'Courses',
      path:"/courses",
      active : pathname  === "/courses" ? true:false,
    },{
      label:'Align Lecture',
      path:"/lecture",
      active : pathname  === "/lecture" ? true:false,
    }
  ],[pathname])
  return (
    <div className="p-4 flex flex-col justify-start items-start gap-y-3">
      {
        routes.map((item,i)=>(
          <Labels key={i} {...item} />
        ))
      }
    </div>
  )
}

export default DashBoardSideBar