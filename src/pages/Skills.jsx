import React, { useEffect } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaGithub,
  FaReact,
  FaFigma,
} from "react-icons/fa";
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

  return (
    <div name="Skills" className={skillsContainerStyle} data-aos="zoom-in">
      <h2 className="text-3xl text-center font-bold text-gray-800 dark:text-neutral-100 mb-8">
        My <span className="text-[#E01b84]">Skills</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-10 justify-around">
        {/* Technical Skills */}
        <div className={technicalSkillsCardStyle} data-aos="flip-left">
          <div className="flex flex-col justify-center gap-16 items-center text-gray-800 dark:text-neutral-300 font-medium">
            <div className="flex flex-wrap gap-4 justify-center">
              <SkillIcon icon={<FaHtml5 />} label="HTML" color="text-red-500" />
              <SkillIcon icon={<FaCss3 />} label="CSS" color="text-blue-500" />
              <SkillIcon
                icon={<FaJs />}
                label="JavaScript"
                color="text-yellow-500"
              />
              <SkillIcon
                icon={<FaReact />}
                label="React.js"
                color="text-black dark:text-white"
              />
              <SkillIcon
                icon={<FaGithub />}
                label="GitHub"
                color="text-black dark:text-white"
              />
              <SkillIcon
                icon={<SiTailwindcss />}
                label="Tailwindcss"
                color="text-blue-300"
              />
              <SkillIcon
                icon={<FaFigma />}
                label="Figma"
                color="text-purple-500"
              />
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
                <BsPatchCheckFill className="text-20 text-black dark:text-white" />
                <span>Communication</span>
              </li>
              <li className="flex gap-1 items-center font-medium">
                <BsPatchCheckFill className="text-20 text-black dark:text-white" />
                <span>Adaptive Learner</span>
              </li>
              <li className="flex gap-1 items-center font-medium">
                <BsPatchCheckFill className="text-20 text-black dark:text-white" />
                <span>Problem Solver</span>
              </li>
              <li className="flex gap-1 items-center font-medium">
                <BsPatchCheckFill className="text-20 text-black dark:text-white" />
                <span>Detail Listener</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillIcon = ({ icon, label, color }) => (
  <div className="text-center">
    {React.cloneElement(icon, {
      className: `text-6xl rounded-full p-2 border-white border-2 ${color}`,
    })}
    <h1>{label}</h1>
  </div>
);

export default Skills;
