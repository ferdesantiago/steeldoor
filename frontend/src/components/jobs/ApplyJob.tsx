import React, { useState, useEffect } from "react";
import axios from "axios";

interface FormApply {
  userId: string;
  jobId: string;
}

const ApplyJob: React.FC = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [formData, setFormData] = useState<FormApply>({
    userId: "",
    jobId: ""
  });
  const [optionsJob, setOptionsJob] = useState<any[]>([]);
  const [optionsUser, setOptionsUser] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseUser = await axios.get<any[]>(`${apiUrl}/user`);
        const responseJob = await axios.get<any[]>(`${apiUrl}/job`);
        setOptionsUser(responseUser.data);
        setOptionsJob(responseJob.data);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchData();
  }, []);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${apiUrl}/job/apply`, formData);
    } catch (error) {
      console.error("Error applying for job:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="user"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            User:
          </label>
          <select
            id="user"
            name="userId"
            value={formData.userId}
            onChange={handleSelectChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select User</option>
            {optionsUser?.map((userOption: any) => (
              <option key={userOption.id} value={userOption.id}>
                {userOption.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="job"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Job:
          </label>
          <select
            id="job"
            name="jobId"
            value={formData.jobId}
            onChange={handleSelectChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Job</option>
            {optionsJob?.map((jobOption: any) => (
              <option key={jobOption.id} value={jobOption.id}>
                {jobOption.company}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default ApplyJob;
