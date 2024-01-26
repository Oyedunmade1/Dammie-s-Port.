import React, { useEffect } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const ContactMe = ({ darkMode }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  const cardStyle = `bg-white dark:bg-[#000C1D] p-6 rounded-md shadow-lg mb-6 transition-colors ${
    darkMode ? "border-neutral-700" : "border-neutral-200"
  }`;

  const inputStyle = `focus:outline-none focus:border-[#e01b84] w-full bg-transparent p-2 border-2 ${
    darkMode ? "border-neutral-700" : "border-neutral-300"
  } rounded-md mb-4`;

  const buttonStyle = `bg-[#e01b84] text-white p-2 rounded-md hover:bg-pink-800 transition-colors`;

  return (
    <div name="contact" id="contact">
      <div className="container mx-auto pt-16 pb-16">
        <h2
          className="text-black dark:text-white text-3xl text-center font-bold mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Contact <span className="text-[#e01b84]">Me</span>
        </h2>

        <div className="flex justify-center">
          <div className={`${cardStyle} w-full max-w-5xl`} data-aos="fade-up">
            <div className="flex flex-row gap-8">
              <div>
                <div className="flex items-center mb-6 text-black dark:text-white">
                  <FaEnvelope className="rounded-full p-2 border-black dark:border-white  border-2 text-4xl  mr-4" />
                  <span>Email:</span>
                  <a href="mailto:doyedunmade@gmail.com" className="ml-2">
                    doyedunmade@gmail.com
                  </a>
                </div>

                <div className="flex items-center mb-6 text-black dark:text-white">
                  <FaMapMarkerAlt className="rounded-full p-2 border-black dark:border-white border-2 text-4xl mr-4" />
                  <span>Location:</span>
                  <span className="ml-2">Abuja, Nigeria</span>
                </div>

                <div className="flex items-center mb-6 text-black dark:text-white">
                  <FaPhone className="rounded-full p-2 border-black dark:border-white  border-2 text-4xl  mr-4" />
                  <span>Phone:</span>
                  <span className="ml-2">+2347031675528</span>
                </div>

                <p className="text-gray-600 dark:text-neutral-300 mb-6">
                  Feel free to reach out to me via email, phone, or connect with
                  me on social media. I'm looking forward to hearing from you!
                </p>
              </div>

              <div>
                <form>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={inputStyle}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={inputStyle}
                  />
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className={inputStyle}
                  />
                  <button type="submit" className={buttonStyle}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
