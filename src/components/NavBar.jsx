// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  return (
    <nav className="bg-slate-900  h-16 text-white">
      <div className="nav flex  justify-between items-center mx-10 lg:container  sm:mx-20 md:mx-auto lg:mx-auto   md:px-40 h-16  ">
        <div className="logo font-semibold  cursor-pointer text-lg sm:text-2xl ">
          <a href="./">
            <span className="text-green-500">&lt;</span>
            Pass
            <span className="text-red-400">Manager</span>
            <span className="text-green-500"> /&gt;</span>
          </a>
        </div>
        <ul className="flex gap-2 sm:gap-7 text-lg ">
          <li>
            <a
              href="https://github.com/aavashgyawali"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-gray-300"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="xl"
                className="text-lg sm:text-3xl"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/aavashgyawali/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-gray-300"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="xl"
                className="text-lg sm:text-3xl"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
