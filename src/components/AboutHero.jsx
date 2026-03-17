import React from "react";
import Camera1 from "@/../public/images/about-camera-1.jpg";
import Camera2 from "@/../public/images/about-camera-2.jpg";
import LearnMore from "./LearnMore";
import { ThumbsUp } from "lucide-react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import OurPartners from "./OurPartners";
import Container from "./Container";

const AboutHero = () => {
  const aboutUs = [
    {
      icon: <ThumbsUp />,
      title: "23 Years Experience",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      icon: <FaRegFileAlt />,
      title: "24/7 Support",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut elit",
    },
    {
      icon: <MdOutlineSupportAgent />,
      title: "Industry Certified",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut elit",
    },
  ];
  
  return (
    <section id="aboutUs" className="py-16 sm:py-24 scroll-mt-16">
      <Container>
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[#687892] font-semibold tracking-wider uppercase text-3xl">About Us</span>
          <h1 className="text-[#002b3d] text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4 leading-tight">
            Trusted Security Partner <br className="hidden sm:block" /> Since 2001
          </h1>
          <p className="text-[#7a7777] max-w-[600px] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            eum dolor consectetur velit laborum blanditiis ducimus.
          </p>
        </div>

        {/* Main content — image + text */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Images */}
          <div className="relative w-full lg:w-1/2">
            <img
              src={Camera1}
              alt=""
              className="w-full h-[280px] sm:h-[360px] object-cover rounded-2xl"
            />
            <img
              src={Camera2}
              alt=""
              className="hidden sm:block w-[55%] h-[200px] object-cover rounded-2xl border-4 border-white shadow-xl absolute -bottom-10 -right-4 lg:-right-8"
            />
            {/* Experience badge */}
            <div className="hidden sm:flex bg-[#002b3d] text-white rounded-xl px-5 py-4 absolute -bottom-6 left-4 shadow-lg flex-col items-center">
              <span className="text-3xl font-bold">23+</span>
              <span className="text-xs tracking-wide">Years</span>
            </div>
          </div>

          {/* Text content */}
          <div className="w-full lg:w-1/2 mt-8 sm:mt-14 lg:mt-0">
            <p className="text-[#7a7777] mb-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
              eum dolor consectetur velit laborum blanditiis ducimus, aliquam
              corrupti fugiat repellendus possimus ipsa vitae at, itaque nemo!
              Excepturi officiis quisquam recusandae soluta necessitatibus omnis
              inventore quod, doloremque, reprehenderit dolor quibusdam
              voluptatibus!
            </p>
            <p className="text-[#7a7777] mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              corrupti quas praesentium voluptates! Obcaecati beatae sapiente a,
              non.
            </p>
            <LearnMore />
          </div>
        </div>

        {/* Why Choose Us — feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 sm:mt-24">
          {aboutUs.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
            >
              <div className="bg-[#002b3d] w-14 h-14 text-white flex items-center justify-center rounded-full mx-auto mb-4">
                {item.icon}
              </div>
              <h4 className="text-[#002b3d] font-bold text-lg sm:text-xl mb-2">
                {item.title}
              </h4>
              <p className="text-[#7a7777] text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>

        <OurPartners />
      </Container>
    </section>
  );
};

export default AboutHero;
