import React from "react";
import { FaReact, FaJs, FaCss3Alt } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

const Header = () => {
  const iconPositions = [
    { icon: <FaReact size={32} color="white" />, angle: 45 },
    { icon: <FaJs size={32} color="#f0db4f" />, angle: 135 },
    { icon: <FaCss3Alt size={32} color="#38B2AC" />, angle: 225 },
    { icon: <SiRedux size={32} color="#764ABC" />, angle: 315 },
  ];

  const calculatePosition = (index) => {
    const totalIcons = iconPositions.length;
    const angleIncrement = (2 * Math.PI) / totalIcons;
    const radiusPercentage = 40; // Adjust the radius percentage as needed

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const radius =
      Math.min(screenWidth, screenHeight) * (radiusPercentage / 100);

    const x = radius * Math.cos(angleIncrement * index);
    const y = radius * Math.sin(angleIncrement * index);

    const adjustedX = index === 0 ? x - 10 : index === 1 ? x + 10 : x;
    const adjustedY = index === 0 ? y + 10 : index === 1 ? y - 10 : y;

    return { x: adjustedX, y: adjustedY };
  };

  return (
    <div className="flex flex-col lg:flex-row px-8 md:px-10 2xl:gap-20 py-20 relative">
      <div className="flex flex-col mb-20 lg:mb-0 mt-6 inset-0  ">
        <div className="flex gap-4 items-center my-4">
          <h2 className="text-gray-800 dark:text-neutral-100 text-4xl font-bold text-center">
            Hello, I'm
          </h2>
        </div>
        <h1 className="text-5xl text-gray-800 dark:text-neutral-100 2xl:text-6xl font-bold">
          Oyedunmade Damilola Khadijat
        </h1>
        <p className="text-lg pt-2 ">
          <span className="font-bold text-[#E01b84]">A Frontend Developer</span>{" "}
          |{" "}
          <span className="font-bold text-black dark:text-white">
            Technical Writer
          </span>
        </p>
        <div className="mt-10 flex gap-10">
          <a href="">
            <button className="bg-[#E01b84] text-lg text-black dark:text-neutral-100 font-semibold rounded-md py-2 px-4 hover:bg-pink-800">
              Download CV
            </button>
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center w-full md:w-1/2">
        <div className="relative w-[240px] h-[240px] md:w-[400px] md:h-[400px] 2xl:w-[500px] 2xl:h-[500px] rounded-full border border-gray-600 dark:border-gray-200 p-4">
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1704460532663/412b66c4-3496-45c1-a278-e15502d73f8e.png"
            className="w-full h-full object-cover rounded-full"
            alt="Profile Image"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            {iconPositions.map((iconObj, index) => {
              const { x, y } = calculatePosition(index);
              const style = {
                position: "absolute",
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
              };

              return (
                <div key={index} style={style}>
                  {iconObj.icon}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
