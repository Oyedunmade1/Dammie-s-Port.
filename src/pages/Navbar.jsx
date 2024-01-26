import React from "react";
import { FaSun } from "react-icons/fa";
import { MdOutlineNightlight } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = ({ darkMode, isOpen, toggleMenu, toggleTheme }) => {
  return (
    <div className="px-0 2xl:px-40 z-10">
      <div className="w-full items-center justify-between py-4 px-10">
        <div className="flex items-center justify-between w-full">
          <a
            href="/"
            className="text-2xl font-bold text-black dark:text-[#E01B84] cursor-pointer"
          >
            MediCoder
          </a>
          <ul className="hidden md:flex gap-10 pl-6 text-lg text-slate-800 dark:text-gray-200">
            <li className="cursor-pointer hover:text-pink-800">
              <a href="#home">Home</a>
            </li>
            <li className="cursor-pointer hover:text-pink-800">
              <a href="#about">About</a>
            </li>

            <li className="cursor-pointer hover:text-pink-800">
              <a href="#projects">Projects</a>
            </li>
            <li className="cursor-pointer hover:text-pink-800">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button onClick={toggleTheme} className="p-2">
            {darkMode ? (
              <FaSun size={24} color={"white"} />
            ) : (
              <MdOutlineNightlight size={24} color={"gray"} />
            )}
          </button>
          <div className="md:hidden">
            <button
              type="button"
              className=" "
              aria-controls="online-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <BiMenu
                size={26}
                className={`${isOpen ? "hidden" : "block"} text-gray-200 `}
              />
              <AiOutlineCloseCircle
                size={26}
                className={`${
                  isOpen ? "block" : "hidden"
                } h-6 w-6 dark:text-gray-300 `}
              />
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div
          className={`${isOpen ? "block pt-4" : "hidden"} md:hidden`}
          id="mobile-menu"
        >
          <div className=" flex flex-col gap-4 text-md text-gray-700 dark:text-neutral-200">
            <a href="#home" onClick={toggleMenu} className="cursor-pointer ">
              Home
            </a>
            <a href="#about" onClick={toggleMenu} className="cursor-pointer ">
              About
            </a>
            <a href="#project" onClick={toggleMenu} className="cursor-pointer ">
              Project
            </a>
            <a href="#contact" onClick={toggleMenu} className="cursor-pointer ">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
