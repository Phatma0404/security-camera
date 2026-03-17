import React from "react";
import Container from "./Container";
import { CircleCheckBig, Cog, Settings } from "lucide-react";

const features = [
  {
    icon: <CircleCheckBig size={28} />,
    title: "Innovation",
    desc: "Lorem ipsum dolor sit amet consectetur.",
    number: "01",
  },
  {
    icon: <CircleCheckBig size={28} />,
    title: "High Quality",
    desc: "Lorem ipsum dolor sit amet consectetur.",
    number: "02",
  },
  {
    icon: <CircleCheckBig size={28} />,
    title: "Best Product",
    desc: "Lorem ipsum dolor sit amet consectetur.",
    number: "03",
  },
  {
    icon: <Settings size={28} />,
    title: "Top Services",
    desc: "Lorem ipsum dolor sit amet consectetur.",
    number: "04",
  },
];

const HeroCard = () => {
  return (
    <section className="hero-cards my-10 sm:my-16 -mt-2 sm:-mt-6 relative z-10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="cursor-pointer group bg-white rounded-xl p-5 sm:p-6 shadow-md hover:shadow-xl border border-gray-100 hover:border-[#687892]/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-[#002b3d] w-12 h-12 rounded-lg flex items-center justify-center text-white group-hover:bg-[#687892] transition-colors duration-300">
                  {feature.icon}
                </div>
                <span className="text-3xl sm:text-4xl font-bold text-gray-100 group-hover:text-[#687892]/20 transition-colors duration-300">
                  {feature.number}
                </span>
              </div>
              <h2 className="font-bold text-[#002b3d] text-base sm:text-lg mb-2">{feature.title}</h2>
              <p className="text-[#7a7777] text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HeroCard;
