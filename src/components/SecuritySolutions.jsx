import Container from "./Container";
import { Play } from "lucide-react";

import LearnMore from "./LearnMore";

const SecuritySolutions = () => {
  return (
    <section className="py-10 mb-6 securtiy-section">
      <Container>
        <div className="flex flex-col items-center text-center ">
          <h1 className="text-[60px] text-white mb-4 max-w-[800px] font-bold leading-[1.1]">
            Security Solutions for Your Work and Home
          </h1>
          <p className="text-[#fff] mb-8 max-w-[700px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
            quidem ducimus reprehenderit adipisci dolorum, tempore accusamus!
            Numquam magnam nesciunt officia.
          </p>

          <div className="pb-12 relative flex items-center gap-8">
            <LearnMore />
            <div
              className="bg-transparent w-[60px] h-[60px] shadow-[0_0_0_4px_rgba(255,255,255,0.5),0_0_0_15px_rgba(255,255,255,0.2)]
                   hover:scale-110 transition-transform duration-300 rounded-full flex items-center justify-center cursor-pointer"
            >
              <Play size={16} className="text-white" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SecuritySolutions;
