// import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-slate-900  h-16 text-white">
      <div className="nav flex justify-between items-center container mx-auto px-40 h-16">
        <div className="logo font-semibold text-2xl cursor-pointer">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-red-400">Manager</span>
          <span className="text-green-500"> /&gt;</span>
        </div>
        <ul className="flex gap-7 text-lg ">
          <a href="" className="hover:underline hover:text-gray-300">
            Home
          </a>
          <a href="" className="hover:underline hover:text-gray-300">
            Contact
          </a>
          <a href="" className="hover:underline hover:text-gray-300">
            About
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
