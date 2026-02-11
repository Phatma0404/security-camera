import React from "react";
import Container from "./Container";
import { TbFriends, TbSettingsCog } from "react-icons/tb";
import { GrUserWorker } from "react-icons/gr";
import { BsArrowRight } from "react-icons/bs";

const WorkingProcess = () => {
  const workingProcess = [
    {
      icon: <TbFriends size={50} />,
      title: "Discussion",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus soluta placeat voluptatibus laboriosam!",
    },
    {
      icon: <TbSettingsCog size={50} />,
      title: "Installation",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus soluta placeat voluptatibus laboriosam!",
    },
    {
      icon: <GrUserWorker size={50} />,
      title: "Maintenance",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus soluta placeat voluptatibus laboriosam!",
    },
  ];
  return (
    <section className="pb-18">
      <Container>
        <div className="text-center">
          <h1 className="text-[#002b3d] text-3xl md:text-5xl font-bold mb-4">
            Our Working Process
          </h1>
          <p className="text-[#7a7777]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis esse
            temporibus deleniti obcaecati?
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center text-center gap-24 mt-24">
          {workingProcess.map((item, index) => (
            <div key={index} className="bg-[#e9e9e9] rounded-xl relative p-3">
              {" "}
              <div className="w-[90px] h-[90px] bg-[#687892] text-white flex items-center justify-center text-center mx-auto rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[50px]">
                {item.icon}
              </div>
              <h2 className="text-[#002b3d] font-bold text-2xl pt-16 pb-4">
                {item.title}
              </h2>
              <p className="text-[#7a7777] pb-6">{item.desc}</p>
              {index !== workingProcess.length - 1 && (
                <span className="hidden md:flex absolute top-1/2 -right-15 -translate-y-1/2 text-3xl text-gray-400">
                  <BsArrowRight />
                </span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WorkingProcess;
