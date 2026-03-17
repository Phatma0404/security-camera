import Container from "./Container";
import { Play, ShieldCheck, Home, Building2 } from "lucide-react";
import LearnMore from "./LearnMore";

const features = [
  { icon: <ShieldCheck size={24} />, text: "Advanced Protection" },
  { icon: <Home size={24} />, text: "Home Security" },
  { icon: <Building2 size={24} />, text: "Office Solutions" },
];

const SecuritySolutions = () => {
  return (
    <section className="py-16 sm:py-24 securtiy-section relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <Container>
        <div className="relative z-10 flex flex-col items-center text-center">
          <span className="text-white/70 font-semibold tracking-wider uppercase text-2xl mb-3">
            Why Choose Us
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-white max-w-[800px] font-bold leading-[1.1] mb-6">
            Security Solutions for Your Work and Home
          </h1>
          <p className="text-white/80 mb-10 max-w-[600px] text-sm sm:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
            quidem ducimus reprehenderit adipisci dolorum, tempore accusamus!
            Numquam magnam nesciunt officia.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 sm:px-5 py-2.5 rounded-full text-sm"
              >
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pb-4">
            <LearnMore bg="bg-white hover:bg-gray-100 !text-[#002b3d]" />
            <button
              className="flex items-center gap-3 text-white cursor-pointer group"
            >
              <div
                className="w-[50px] h-[50px] sm:w-[56px] sm:h-[56px] border-2 border-white/50 group-hover:border-white
                     group-hover:scale-110 transition-all duration-300 rounded-full flex items-center justify-center"
              >
                <Play size={18} className="text-white ml-0.5" />
              </div>
              <span className="font-medium text-sm sm:text-base">Watch Video</span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SecuritySolutions;
