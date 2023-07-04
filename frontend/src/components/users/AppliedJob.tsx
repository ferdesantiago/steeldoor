import React, { useEffect, useState } from "react";
import axios from "axios";

interface Jobs {
  id: number,
  company: string,
  location: string,
  title: string,
  description: string,
  salary: number,
  skills: string,
  createdAt: string,
  updatedAt: string,
}
interface Data {
  id: 1,
  name: string,
  email: string,
  password: string,
  role: string,
  resume: string,
  isActive: boolean,
  createdAt: string,
  updatedAt: string,
  jobs: Jobs[]
}

const AppliedJob: React.FC = () => {
  const [dataApplied, setDataApplied] = useState<Data[]>()
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<any[]>(`${apiUrl}/user/applied`);
        setDataApplied(response.data);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <table className="w-full max-w-[750px] bg-white border border-gray-200 mx-auto px-5">
        <thead>
          <tr className="py-2 px-4 bg-gray-100 border-b border-gray-200 border-r">
            <td>
              name
            </td>
            <td>
              jobs
            </td>
          </tr>
        </thead>
        <tbody>
          {dataApplied && dataApplied.map((index, key) => {
            return (
              <tr key={key}>
                <td className="py-2 px-4 border-b border-gray-200 border-r">
                  {index['name']}
                </td>
                <td className="py-2 px-4 border-b border-gray-200 border-r">
                  {
                    index['jobs']?.map((job) => {
                      return (
                        <ul>
                          <li>
                            {job.company}
                          </li>
                        </ul>
                      )
                    })
                  }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default AppliedJob;
