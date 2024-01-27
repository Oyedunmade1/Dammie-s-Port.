import React, { useEffect } from "react";
import { FaCode, FaPaintBrush, FaPen } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = ({ darkMode }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  const containerStyle = {
    position: "relative",
    backgroundImage: `url("https://cdn.hashnode.com/res/hashnode/image/upload/v1706287727661/39b6e427-33ef-4c80-9548-0824c1fbcdb3.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    maxWidth: "100%",
  };

  const cardStyle = `bg-white text-gray-600 dark:text-neutral-300 dark:bg-[#000C1D] flex flex-col justify-center items-center gap-4 text-center p-6 rounded-md shadow-lg mb-4 transition-colors ${
    darkMode ? "border-neutral-700" : "border-neutral-200"
  } hover:bg-slate-800 hover:text-white hover:border-blue-500 hover:translate-x-5`;

  return (
    <div>
      <h2 className="text-3xl text-center font-bold text-gray-800 dark:text-white mb-8 mt-10">
        Services <span className="text-[#E01b84]">Category</span>
      </h2>
      <div
        name="Services"
        style={containerStyle}
        className="bg-opacity-5 bg-gray-600"
      >
        <div className="sm:flex sm:flex-row md:flex lg:flex justify-around gap-4 inset-0 items-center absolute">
          <div
            className={`${cardStyle} sm:w-80 sm:h-60 md:w-96 md:h-72 lg:w-96 lg:h-72`}
          >
            <FiMonitor className="text-4xl text-[#E01b84]" />
            <h3 className="text-lg font-bold mb-2 dark:text-white">
              Web Development
            </h3>
            <p className="">
              Crafting interactive and responsive web applications.
            </p>
          </div>
          <div
            className={`${cardStyle} sm:w-80 sm:h-60 md:w-96 md:h-72 lg:w-96 lg:h-72`}
          >
            <FaPaintBrush className="text-4xl text-[#E01b84] " />
            <h3 className="text-lg font-bold mb-2 dark:text-white">
              UI Designs
            </h3>
            <p className="">
              Creating visually appealing and user-friendly interfaces.
            </p>
          </div>
          <div
            className={`${cardStyle} sm:w-80 sm:h-60 md:w-96 md:h-72 lg:w-96 lg:h-72`}
          >
            <FaPen className="text-4xl text-[#e01b84] " />
            <h3 className="text-lg font-bold mb-2 dark:text-white">
              Technical Writing
            </h3>
            <p className="">
              Sharing knowledge and insights through clear and concise writing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
