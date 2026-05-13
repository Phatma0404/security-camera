import React from "react";
import Container from "../components/Container";
import heroCamer from "../../public/images/heroCamer.jpeg";
import Stats from "../components/Stats/Stats.jsx";
import { Play } from "lucide-react";
import HeroCard from "../components/HeroCard.jsx";
import Reveal from "../components/Reveal.jsx";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-gray-50 dark:bg-[#0f0f0f]">
      <Container>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-12 pt-12 sm:pt-16 lg:pt-24">
          {/* left */}

          <div className="flex-1 text-center lg:text-left">
            <Reveal variant="fade-right" delay={100}>
              <h1 className="block text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#102933] dark:text-white">
                {t("hero.title1")}{" "}
                <span className="block text-[#6b768b] dark:text-[#a0aec0]">{t("hero.title2")} </span>
                {t("hero.title3")}
              </h1>
            </Reveal>
            <Reveal variant="fade-right" delay={250}>
              <hr className="border-[#7b848d] dark:border-gray-600 my-4 w-24 h-1 border-2 mx-auto lg:mx-0 lg:ml-4 rounded-md" />
            </Reveal>
            <Reveal variant="fade-up" delay={350}>
              <p className="mt-4 sm:mt-6 text-gray-600 dark:text-gray-400 max-w-[500px] mx-auto lg:mx-0">
                {t("hero.desc")}
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={500}>
              <div className="mt-6 sm:mt-8">
                <Stats />
              </div>
            </Reveal>
          </div>

          {/* right */}

          <Reveal
            variant="zoom-in"
            delay={200}
            duration={900}
            className="flex-1 relative flex justify-center order-first lg:order-last"
          >
            <img
              src={heroCamer}
              alt="Security Camera"
              className="rounded-[35%] w-[220px] sm:w-[280px] md:w-[320px] lg:w-[350px] border-8 border-[#d1d1cf] dark:border-gray-700"
            />
          </Reveal>
        </div>
      </Container>

      <Reveal variant="fade-up" delay={400}>
        <HeroCard />
      </Reveal>
    </section>
  );
};

export default Hero;
