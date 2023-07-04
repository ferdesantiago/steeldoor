import axios from "axios";
import React, { useEffect, useState } from "react";

interface FormJob {
  id?: string;
  company: string;
  location: string;
  title: string;
  description: string;
  salary: string;
  skills: string;
}

const CreateJob: React.FC<{ job: FormJob | null, setLoading: Function }> = ({ job, setLoading }) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  let initJob: FormJob = {
    company: "",
    location: "",
    title: "",
    description: "",
    salary: "",
    skills: ""
  }

  const [formData, setFormData] = useState<FormJob>(initJob);

  useEffect(() => {
    if (job) {
      setFormData(job)
    }
  }, [job])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      let url;
      if (job && job.id) {
        formData.id = job.id
        url = `/job/${formData.id}`
        await axios.put<any>(`${apiUrl}${url}`, formData);
      } else {
        url = "/job"
        await axios.post<any>(`${apiUrl}${url}`, formData);
      }
      setFormData(initJob)
    } catch (error) {
      console.error("Error creating user:", error);
    } finally {
      setLoading(true)
    }
  };

  const handleDelete = async () => {
    try {
      if(job && job.id){
        let url = `/job/${job.id}`
        await axios.delete<any>(`${apiUrl}${url}`);
        setFormData(initJob)
      }
    } catch (error) {
      console.error("Error creating user:", error);
    } finally {
      setLoading(true)
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">Company:</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="resume" className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="resume" className="block text-gray-700 text-sm font-bold mb-2">Salary:</label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="resume" className="block text-gray-700 text-sm font-bold mb-2">Skills:</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save</button>
        <button type="button" onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline float-right">Delete</button>
      </form>
    </div>
  );
};

export default CreateJob;