// CertificatesAndAwards.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CertificatesAndAwards = () => {
  const certificateData = [
    // {
    //   title: "Certified Frontend Developer",
    //   imageSrc:
    //     "https://cdn.hashnode.com/res/hashnode/image/upload/v1705598688989/db7b1335-2e2a-49f3-ab22-867ad448ccac.jpeg",
    // },
    {
      title: "Most Outstanding Performance award",
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1705579238968/8f1f39f8-cd26-401a-9bc3-959a496de78d.jpeg",
    },
    {
      title: "Volunteering Service Award",
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1705579076648/797a988d-bf2f-492b-b071-0a54f4e399ee.jpeg",
    },

    {
      title: "Leadership Luminary Honors",
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1705579440643/ce5bc14d-4844-48a3-bf2d-c7044b0a3b87.jpeg",
    },
    {
      title: "Award of Excellence",
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1705584188931/939acf43-f0b6-472c-9e0c-d34c02d5586b.jpeg",
    },
    {
      title: "Award of Appreciation (JCI Nigeria, UNIABUJA.)",
      imageSrc:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1706346005404/3f2a60d5-2a0a-4641-abf1-0cec4d690f5f.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // fade: true,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
  };

  return (
    <div className="">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-neutral-100 mb-8 text-center">
        Certification and <span className="text-[#E01b84]">Awards</span>
      </h2>
      <Slider {...settings}>
        {certificateData.map((certificate, index) => (
          <div key={index} className="text-center">
            <img
              src={certificate.imageSrc}
              alt={certificate.title}
              className="mx-auto rounded-md shadow-lg"
              style={{ maxWidth: "50%", height: "20%" }}
            />
            <p className="mt-4 text-lg text-gray-800 dark:text-neutral-100 font-semibold">
              {certificate.title}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CertificatesAndAwards;
