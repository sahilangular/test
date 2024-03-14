import axios from "axios";
import { useEffect, useState } from "react";

export default function DataTable() {
  const [rows, setRows] = useState<any>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/user/all").then((res) => {
      setRows(res.data.users);
    });
  }, []);
  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                course assign
              </th>
              <th scope="col" className="px-6 py-3">
                lecture assign
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item:any)=>(
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.name}
              </th>
              <td className="px-6 py-4">my App</td>
              <td className="px-6 py-4">{item._id!}</td>
              <td className="px-6 py-4">$2999</td>
            </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </>
  );
}
