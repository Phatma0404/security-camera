import React from "react";
import Container from "./Container";
import { TbFriends, TbSettingsCog } from "react-icons/tb";
import { GrUserWorker } from "react-icons/gr";
import { BsArrowRight } from "react-icons/bs";

const workingProcess = [
  {
    icon: <TbFriends size={32} />,
    title: "Discussion",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus soluta placeat voluptatibus laboriosam!",
    step: "01",
  },
  {
    icon: <TbSettingsCog size={32} />,
    title: "Installation",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus soluta placeat voluptatibus laboriosam!",
    step: "02",
  },
  {
    icon: <GrUserWorker size={32} />,
    title: "Maintenance",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus soluta placeat voluptatibus laboriosam!",
    step: "03",
  },
];

const WorkingProcess = () => {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[#687892] font-semibold tracking-wider uppercase text-2xl">How We Work</span>
          <h1 className="text-[#002b3d] text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Our Working Process
          </h1>
          <p className="text-[#7a7777] max-w-[500px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis esse
            temporibus deleniti obcaecati?
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 md:gap-8 relative">
          {/* connector line - desktop only */}
          <div className="hidden sm:block absolute top-[52px] left-[20%] right-[20%] h-[2px] bg-gray-200 z-0" />

          {workingProcess.map((item, index) => (
            <div key={index} className="relative z-10 text-center">
              {/* step circle */}
              <div className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[104px] md:h-[104px] bg-white border-2 border-[#687892] text-[#687892] flex items-center justify-center mx-auto rounded-full shadow-lg mb-6 sm:mb-8 transition-all duration-300 hover:bg-[#002b3d] hover:text-white hover:border-[#002b3d] group">
                {item.icon}
              </div>

              {/* step number */}
              <span className="inline-block bg-[#687892] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                Step {item.step}
              </span>

              <h2 className="text-[#002b3d] font-bold text-xl sm:text-2xl mb-3">
                {item.title}
              </h2>
              <p className="text-[#7a7777] text-sm sm:text-base max-w-[300px] mx-auto">
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
