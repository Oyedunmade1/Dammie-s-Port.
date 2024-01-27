import React, { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const ProjectCard = ({
  title,
  description,
  imageUrl,
  githubLink,
  vercelLink,
}) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="flex-shrink-0 w-64 md:w-1/2 lg:w-1/3 p-4"
      data-aos="zoom-in"
    >
      <div className="bg-white dark:bg-[#000C1D] p-6 rounded-md shadow-lg mb-4 transition-colors">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover mb-4 rounded-md"
        />

        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-neutral-300 mb-4 text-justify">
          {description}
        </p>

        <div className="flex justify-between">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-gray-800 dark:text-white hover:text-pink-800 cursor-pointer" />
          </a>
          <a href={vercelLink} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt className="text-2xl text-gray-800 dark:text-white hover:text-pink-800 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

const MyProjects = () => {
  return (
    <div name="projects" id="projects" className="gap-4 px-10 mt-10">
      <h2 className="text-3xl text-center font-bold text-gray-800 dark:text-neutral-100 mb-8">
        Featured <span className="text-[#E01b84]">Projects</span>
      </h2>
      <div className="flex flex-wrap justify-around px-4 md:px-8 lg:px-16">
        <ProjectCard
          title="BitMedics"
          description="Efficient electronic health record management system for storing and retrieving patient health data, ensuring timely and effective healthcare delivery."
          imageUrl="https://cdn.hashnode.com/res/hashnode/image/upload/v1705923311451/8e8786ad-436b-4cf2-851a-64df5a90dde0.png"
          githubLink="https://github.com/example/project1"
          vercelLink="https://bitmedics-app.vercel.app/"
        />

        <ProjectCard
          title="A Meal Recipe App"
          description="A user-friendly web-app for recipe search, based on dietary preferences, meal types, and available ingredients. Provides step-by-step meal preparation guidance."
          imageUrl="https://cdn.hashnode.com/res/hashnode/image/upload/v1705923563670/3817bc86-7b5d-42d6-8415-4bb3e9f3347a.png"
          githubLink="https://github.com/example/project2"
          vercelLink="https://recipe-app-tiidelab.netlify.app/"
        />

        <ProjectCard
          title="A Hotel Website "
          description="A Website built for Rosewood Hotels and resorts that allows users discover luxurious comfort and exquisite service and book a stay for ablend of elegance and relaxation."
          imageUrl="https://cdn.hashnode.com/res/hashnode/image/upload/v1706363984867/2e3a67e9-0c72-4ef3-9759-98cb1e5e16f9.png"
          githubLink="https://github.com/example/project3"
          vercelLink="https://hotel-website-woad.vercel.app/"
        />
      </div>
    </div>
  );
};

export default MyProjects;
