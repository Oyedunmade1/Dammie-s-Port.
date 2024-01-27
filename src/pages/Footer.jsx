import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const AllRightsReservedFooter = ({ darkMode }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div name="AllRightsReservedFooter" className="bg-black py-8">
      <div className=" text-center ">
        <p
          className="text-s text-white"
          //   data-aos="fade-up"
          //   data-aos-duration="1000"
        >
          © 2024 Damilola Oyedunmade. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AllRightsReservedFooter;
