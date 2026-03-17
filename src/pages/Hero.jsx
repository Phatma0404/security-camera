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
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-12 pt-12 sm:pt-16 lg:pt-24">
          {/* left */}

          <div className="flex-1 text-center lg:text-left">
            <h1 className="block text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#102933]">
              Professional{" "}
              <span className="block text-[#6b768b]">Security Services </span>
              You Can Trust
            </h1>
            <hr className="border-[#7b848d] my-4 w-24 h-1 border-2 mx-auto lg:mx-0 lg:ml-4 rounded-md" />
            <p className="mt-4 sm:mt-6 text-gray-600 max-w-[500px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
              asperiores quisquam quas quidem nam eos ratione commodi maiores
              obcaecati, porro veritatis quos recusandae laborum, enim
              similique.{" "}
            </p>

            <div className="mt-6 sm:mt-8">
              <Stats />
            </div>
          </div>

          {/* right */}

          <div className="flex-1 relative flex justify-center order-first lg:order-last">
            <img
              src={heroCamer}
              alt="Security Camera"
              className="rounded-[35%] w-[220px] sm:w-[280px] md:w-[320px] lg:w-[350px] border-8 border-[#d1d1cf]"
            />
          </div>
        </div>
      </Container>

      <HeroCard />
    </section>
  );
};

export default Hero;
