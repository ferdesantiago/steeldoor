import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="bg-blue-500 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-white font-bold text-xl">SteelDoor</div>
            <ul className="flex space-x-4">
              <li>
                <Link className="text-white hover:text-gray-200" to="/">Users</Link>
              </li>
              <li>
                <Link className="text-white hover:text-gray-200" to="/jobs">Jobs</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;