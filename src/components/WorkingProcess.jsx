import React from "react";
import Container from "./Container";
import { TbFriends, TbSettingsCog } from "react-icons/tb";
import { GrUserWorker } from "react-icons/gr";
import { BsArrowRight } from "react-icons/bs";
import { useLanguage } from "../context/LanguageContext";

const WorkingProcess = () => {
  const { t } = useLanguage();
  const workingProcess = [
    { icon: <TbFriends size={32} />, title: t("workingProcess.discussion"), desc: t("workingProcess.stepDesc"), step: "01" },
    { icon: <TbSettingsCog size={32} />, title: t("workingProcess.installation"), desc: t("workingProcess.stepDesc"), step: "02" },
    { icon: <GrUserWorker size={32} />, title: t("workingProcess.maintenance"), desc: t("workingProcess.stepDesc"), step: "03" },
  ];
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[#687892] dark:text-[#a0aec0] font-semibold tracking-wider uppercase text-2xl">{t("workingProcess.label")}</span>
          <h1 className="text-[#002b3d] dark:text-white text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            {t("workingProcess.title")}
          </h1>
          <p className="text-[#7a7777] dark:text-gray-400 max-w-[500px] mx-auto">
            {t("workingProcess.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 md:gap-8 relative">
          {/* connector line - desktop only */}
          <div className="hidden sm:block absolute top-[52px] left-[20%] right-[20%] h-[2px] bg-gray-200 dark:bg-gray-700 z-0" />

          {workingProcess.map((item, index) => (
            <div key={index} className="relative z-10 text-center">
              {/* step circle */}
              <div className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[104px] md:h-[104px] bg-white dark:bg-[#1a1a1a] border-2 border-[#687892] text-[#687892] flex items-center justify-center mx-auto rounded-full shadow-lg mb-6 sm:mb-8 transition-all duration-300 hover:bg-[#002b3d] dark:hover:bg-[#687892] hover:text-white hover:border-[#002b3d] dark:hover:border-[#687892] group">
                {item.icon}
              </div>

              {/* step number */}
              <span className="inline-block bg-[#687892] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                {t("workingProcess.step")} {item.step}
              </span>

              <h2 className="text-[#002b3d] dark:text-white font-bold text-xl sm:text-2xl mb-3">
                {item.title}
              </h2>
              <p className="text-[#7a7777] dark:text-gray-400 text-sm sm:text-base max-w-[300px] mx-auto">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WorkingProcess;
