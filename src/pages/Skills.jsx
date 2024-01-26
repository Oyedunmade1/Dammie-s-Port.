import React, { useEffect } from "react";
import { FaHtml5, FaCss3, FaJs, FaGithub, FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Skills = ({ darkMode }) => {
  // AOS (Animate on Scroll) initialization
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const skillsContainerStyle = `gap-4 px-10 mt-10`;
  const technicalSkillsCardStyle = `bg-white dark:bg-[#000C1D] p-6 rounded-md shadow-lg mb-6 transition-colors data-aos="zoom-in" w-full md:w-2/3`;
  const softSkillsCardStyle = `bg-white dark:bg-[#000C1D] p-6 rounded-md shadow-lg mb-6 transition-colors  data-aos="zoom-in" w-full md:w-1/3`;

  // const iconStyle = `text-4xl mb-4 ${darkMode ? "" : "text-gray-800"}`;

  return (
    <div name="Skills" className={skillsContainerStyle} data-aos="zoom-in">
      <h2 className="text-3xl text-center font-bold text-gray-800 dark:text-neutral-100 mb-8">
        My <span className="text-[#E01b84]">Skills</span>
      </h2>

      <div className="flex flex-row gap-10 justify-around">
        {/* Technical Skills */}
        <div className={technicalSkillsCardStyle} data-aos="flip-left">
          <div className="flex flex-col justify-center gap-16 items-center text-gray-800 dark:text-neutral-300 font-medium">
            <div className="flex flex-col gap-32 justify-evenly lg:flex-row">
              <div className="text-center  ">
                <FaHtml5
                  className={`text-6xl rounded-full p-2 border-white border-2 text-red-500`}
                />
                <h1>HTML</h1>
              </div>

              <div className="text-center  ">
                <FaCss3
                  className={`text-6xl rounded-full p-2 border-white border-2  text-blue-500`}
                />
                <h1>CSS</h1>
              </div>

              <div className="text-center  ">
                <FaJs
                  className={`text-6xl rounded-full p-2 border-white border-2  text-yellow-500`}
                />
                <h1>JavaScript</h1>
              </div>
            </div>
            <div className="flex flex-col gap-32 justify-evenly lg:flex-row">
              <div className="text-center">
                <FaGithub
                  className={`text-6xl rounded-full p-2 border-white border-2 text-white`}
                />
                <h1>GitHub</h1>
              </div>

              <div className="text-center">
                <SiTailwindcss
                  className={`text-6xl rounded-full p-2 border-white border-2  text-blue-300`}
                />
                <h1>Tailwindcss</h1>
              </div>

              <div className="text-center ">
                <FaFigma
                  className={`text-6xl rounded-full p-2 border-white border-2 text-purple-500`}
                />
                <h1>Figma</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className={softSkillsCardStyle} data-aos="flip-right">
          <div className="flex flex-col gap-5 text-gray-600  dark:text-neutral-300">
            <h3 className="text-lg text-32 dark:text-white font-bold ">
              Soft <span className="text-[#E01b84]">Skills</span>
            </h3>
            <ul className=" flex flex-col gap-2 items-start ">
              <li className="flex gap-1 items-center font-medium">
                <BsPatchCheckFill className="text-20 text-black dark:text-white" />
                <span>Time Management</span>
              </li>
              <li className="flex gap-1 items-center font-medium">
                <BsPatchCheckFill className="text-20 text-white dark:text-white" />
                <span>Time Management</span>
              </li>
              <li className="flex gap-1 items-center font-medium">
                <BsPatchCheckFill className="text-20 text-white dark:text-white" />
                <span>Time Management</span>
              </li>
              <li className="flex gap-1 items-center font-medium">
                <BsPatchCheckFill className="text-20 text-white dark:text-white" />
                <span>Time Management</span>
              </li>

              {/* <li>Communication</li>
              <li>Adaptive Learner</li>
              <li>Detail Listener</li>
              <li>Problem Solver</li>
              <li>Collaborative</li>
              <li>Team Player</li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
