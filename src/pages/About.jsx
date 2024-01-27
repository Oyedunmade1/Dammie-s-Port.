import React, { useEffect } from "react";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      name="about"
      id="about"
      className=""
      data-aos="zoom-out-down"
      data-aos-duration="2000"
    >
      <h2 className="text-3xl text-center font-bold text-gray-800 dark:text-neutral-100 mb-8">
        About <span className="text-[#E01b84]">Me</span>
      </h2>
      <p className="px-10 text-lg text-gray-800 text-[18px] text-center dark:text-neutral-100">
        Welcome! I am Oyedunmade Damilola Khadijat, a passionate frontend
        developer and technical writer. With a strong foundation in technologies
        like React, JavaScript, and CSS, I bring creativity and dedication to
        every project I undertake.
      </p>
      <p className="text-[18px] text-center px-10 text-lg text-gray-800 dark:text-neutral-100 mt-4">
        My journey in web development is fueled by the desire to create
        user-friendly and visually appealing interfaces. I love exploring new
        technologies and sharing my knowledge through writing to contribute to
        the vibrant tech community.
      </p>
      {/* Add more about yourself as needed */}
      <div className="sm:flex sm:flex-row md:flex lg:flex text-center justify-between mt-6 px-8">
        <div
          className="flex flex-col items-center"
          data-aos="zoom-out-down"
          data-aos-duration="2000"
        >
          <CiMail className="text-4xl bg-black dark:bg-white text-white dark:text-black rounded-full p-2" />

          <div className=" text-black dark:text-white text-lg font-bold font-['DM Sans']">
            Email
          </div>
          <a
            href="https://twitter.com/your-twitter-handle"
            className=" text-black dark:text-white text-lg font-normal font-['DM Sans']"
          >
            doyedunmade@gmail.com
          </a>
        </div>
        <div
          className="flex flex-col items-center"
          data-aos="zoom-out-down "
          data-aos-duration="2000"
        >
          <FaGithub className="text-4xl bg-black dark:bg-white text-white dark:text-black rounded-full p-2" />

          <div className=" text-black dark:text-white text-lg font-bold font-['DM Sans']">
            GitHub
          </div>
          <a
            href="#"
            className="text-black dark:text-white text-lg font-normal font-['DM Sans']"
          >
            doyedunmade@gmail.com
          </a>
        </div>
        <div
          className="flex flex-col items-center"
          data-aos="zoom-out-down"
          data-aos-duration="2000"
        >
          <FaLinkedin className="text-4xl bg-black dark:bg-white text-white dark:text-black rounded-full p-2" />

          <div className=" text-black dark:text-white text-lg font-bold font-['DM Sans']">
            LinkedIn
          </div>
          <a
            href="#"
            className=" text-black dark:text-white text-lg font-normal font-['DM Sans']"
          >
            doyedunmade@gmail.com
          </a>
        </div>
        <div
          className="flex flex-col items-center"
          data-aos="zoom-out-down"
          data-aos-duration="2000"
        >
          <FaMedium className="text-4xl bg-black dark:bg-white text-white dark:text-black rounded-full p-2" />

          <div className=" text-black dark:text-white text-lg font-bold font-['DM Sans']">
            Medium
          </div>
          <a
            href="https://twitter.com/your-twitter-handle"
            className=" text-white text-lg font-normal font-['DM Sans']"
          >
            doyedunmade@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
