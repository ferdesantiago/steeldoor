import axios from "axios";
import React, { useState } from "react";

interface FormUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  resume: string;
}

const CreateUser: React.FC <{ user:  | null }>= ({ user }) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  let initUser: FormUser = {
    id: "",
    name: "",
    email: "",
    password: "",
    role: "admin",
    resume: ""
  }
  if (user) {
    initUser = user;
  }
  const [formData, setFormData] = useState<FormUser>(initUser);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      role: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(formData);
    const url = '/user';
    try {
      await axios.post<any>(`${apiUrl}${url}`, {
        "name": formData.name,
        "email": formData.email,
        "password": formData.password,
        "role": formData.role,
        "resume": formData.resume
      });
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">Role:</label>
          <select
            id="options"
            name="options"
            value={formData.role}
            onChange={handleSelectChange}
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
          >
            <option value="admin">admin</option>
            <option value="user">user</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="resume" className="block text-gray-700 text-sm font-bold mb-2">Resume:</label>
          <input
            type="text"
            id="resume"
            name="resume"
            value={formData.resume}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save</button>
        {/* <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline float-right">Delete</button> */}
      </form>
    </div>
  );
};

export default CreateUser;