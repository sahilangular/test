
interface prosp{
    items:any
}

const Items = ({items}:prosp) => {
  return (
    <div className="flex flex-row justify-between">
        <div>Name</div>
        <div>course assign</div>
        <div>lecture aasign</div>
    </div>
  )
}

export default Items