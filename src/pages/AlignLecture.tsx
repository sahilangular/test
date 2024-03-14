import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DashBoardSideBar from "../components/DashBoardSideBar";
import { useEffect, useState } from "react";
import axios from "axios";

const columns: GridColDef[] = [
  { field: "firstName", headerName: "COURSE LINKED", width: 300 },
  { field: "lastName", headerName: "COURSE LINKED DATE", width: 300 },
  { field: "lastName", headerName: "LECTURE NAME", width: 300 },
];

const AlignLecture = () => {
  const [rows, setRows] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8080/api/v1/course/userLectures').then((res)=>{
        console.log(res)
    })
  },[])
  return (
    <div className="flex flex-row gap-x-4">
      <div className="w-80">
        <DashBoardSideBar />
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
          marginLeft: "1px",
          marginTop: "10px",
        }}
      >
        <DataGrid
          className="bg-neutral-50 hover:cursor-pointer"
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
    </div>
  );
};

export default AlignLecture;
