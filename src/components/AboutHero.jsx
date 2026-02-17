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
    <section id="aboutUs">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3">
          {/* first card */}
          <div className="...">
            <img src={Camera1} alt="" className="rounded-tl-[18px]" />
            <img src={Camera2} alt="" className="rounded-bl-[18px]" />
          </div>

          {/* second card */}
          <div className="bg-[#687892] text-white px-8 pt-12 rounded-2xl transition-all duration-300">
            <h1 className="text-[50px] font-bold pb-3">About Us</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
              eum dolor consectetur velit laborum blanditiis ducimus, aliquam
              corrupti fugiat repellendus possimus ipsa vitae at, itaque nemo!
              Excepturi officiis quisquam recusandae soluta necessitatibus omnis
              inventore quod, doloremque, reprehenderit dolor quibusdam
              voluptatibus! Assumenda cupiditate nihil id, nisi quia facilis?
              Neque suscipit officiis assumenda obcaecati ullam maiores beatae
              quaerat modi. Fuga, vitae nisi.
            </p>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              corrupti quas praesentium voluptates! Obcaecati beatae sapiente a,
              non.
            </p>
            <LearnMore />
          </div>

          {/* third card */}
          <div className="bg-white py-12 px-14">
            <h2 className="text-[#002b3d] font-bold text-2xl pb-4">
              Why Choose Us
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium cupiditate alias, odit quaerat enim laboriosam.
            </p>

            {aboutUs.map((item, index) => (
              <div key={index} className="flex gap-4 mt-7">
                <div className="bg-[#002b3d] w-[48px] h-[28px] sm:w-[61px] sm:h-[30px] text-white flex items-center justify-center rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-[#002b3d] font-bold text-xl mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[#7a7777]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <OurPartners />
      </Container>
    </section>
  );
};

export default AboutHero;
