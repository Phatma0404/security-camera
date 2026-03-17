import { Bell, Camera, Zap, ArrowRight } from "lucide-react";
import Container from "../components/Container";

const services = [
  {
    icon: <Camera size={28} />,
    title: "Security Camera",
    desc: "We bring the right people together to challenge established thinking and drive transform in 2020",
    color: "bg-[#002b3d]",
  },
  {
    icon: <Bell size={28} />,
    title: "Fire Detection",
    desc: "We bring the right people together to challenge established thinking and drive transform in 2020",
    color: "bg-[#687892]",
  },
  {
    icon: <Zap size={28} />,
    title: "Smart Home",
    desc: "We bring the right people together to challenge established thinking and drive transform in 2020",
    color: "bg-[#005476]",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-24 scroll-mt-16">
      <Container>
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[#687892] font-semibold tracking-wider uppercase text-3xl">
            What We Offer
          </span>
          <h1 className="text-[#002b3d] text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            We Provide The Best Services
          </h1>
          <p className="text-[#7a7777] max-w-[500px] mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            hic quae illo ratione ab!
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Decorative corner */}
              <div className={`absolute -top-10 -right-10 w-28 h-28 ${item.color} opacity-5 rounded-full group-hover:opacity-10 transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`${item.color} w-14 h-14 rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>

              <h2 className="text-[#002b3d] text-xl sm:text-2xl font-bold mb-3">
                {item.title}
              </h2>
              <p className="text-[#7a7777] text-sm sm:text-base leading-relaxed mb-6">
                {item.desc}
              </p>

              <span className="inline-flex items-center gap-1.5 text-[#002b3d] text-sm font-semibold group-hover:gap-3 transition-all duration-300 cursor-pointer">
                Learn More
                <ArrowRight size={16} />
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
