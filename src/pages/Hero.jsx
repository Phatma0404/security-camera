import React from "react";
import Container from "../components/Container";
import heroCamer from "../../public/images/heroCamer.jpeg";
import Stats from "../components/Stats/Stats.jsx";
import { Play } from "lucide-react";
import HeroCard from "../components/HeroCard.jsx";

const Hero = () => {
  return (
    <section className="bg-gray-50">
      <Container>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 pt-24">
          {/* left */}

          <div className="flex-1">
            <h1 className="block text-4xl lg:text-5xl font-bold leading-tight text-[#102933]">
              Professional{" "}
              <span className="block text-[#6b768b]">Security Services </span>
              You Can Trust
            </h1>
            <hr className="border-[#7b848d] my-4 w-24 h-1 border-2 ml-4 rounded-md" />
            <p className="mt-6 text-gray-600 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
              asperiores quisquam quas quidem nam eos ratione commodi maiores
              obcaecati, porro veritatis quos recusandae laborum, enim
              similique.{" "}
            </p>

            <div className="mt-8 flex gap-4">
              <Stats />
            </div>
          </div>

          {/* right */}

          <div className="flex-1 relative inline-block justify-items-center">
            <img
              src={heroCamer}
              alt="Security Camera"
              className="rounded-[35%] w-[350px] border-8 border-[#d1d1cf]"
            />

            {/* <div
              className="bg-[#003148] absolute bottom-[10%] left-[10%] -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px]  shadow-[0_0_0_8px_rgba(16,41,51,0.1),0_0_0_15px_rgba(16,41,51,0.05)] 
                   hover:scale-110 transition-transform duration-300 rounded-full flex items-center justify-center cursor-pointer"
            >
              <Play size={16} className="text-white" />
            </div> */}
          </div>
        </div>
      </Container>

      <HeroCard />
    </section>
  );
};

export default Hero;
