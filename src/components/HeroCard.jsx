import React from "react";
import Container from "./Container";
import { CircleCheckBig, Cog, Settings } from "lucide-react";
import { cn } from "../lib/utils";

const features = [
  {
    icon: <CircleCheckBig />,
    title: "Innovation",
    desc: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: <CircleCheckBig />,
    title: "High Quality",
    desc: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: <CircleCheckBig />,
    title: "Best Product",
    desc: "Lorem ipsum dolor sit amet consectetur.",
    featured: true,
  },
  {
    icon: <Settings />,
    title: "Top Services",
    desc: "Lorem ipsum dolor sit amet consectetur.",
  },
];
const HeroCard = () => {
  return (
    <section className="hero-cards my-16">
      <Container>
        <div className="bg-[#687892] text-white  rounded-xl flex flex-col lg:flex-row items-center text-center gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col items-center justify-center px-4 py-12 transition-all duration-300",
                feature.featured
                  ? "bg-[#002b3d]  lg:-my-4 rounded-xl shadow-2xl"
                  : "",
              )}
            >
              {/* z-10 scale-115 */}
              {feature.icon}
              <h2 className="font-bold mt-1 mb-3 text-md">{feature.title}</h2>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HeroCard;
