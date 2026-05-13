import { Bell, Camera, Zap, Code2, ArrowRight } from "lucide-react";
import Container from "../components/Container";
import { useLanguage } from "../context/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  const services = [
    { icon: <Camera size={28} />, title: t("services.camera"), desc: t("services.cardDesc"), color: "bg-[#002b3d]" },
    { icon: <Bell size={28} />, title: t("services.fire"), desc: t("services.cardDesc"), color: "bg-[#687892]" },
    { icon: <Zap size={28} />, title: t("services.smart"), desc: t("services.cardDesc"), color: "bg-[#005476]" },
    { icon: <Code2 size={28} />, title: t("services.frontend"), desc: t("services.frontendDesc"), color: "bg-[#003f56]" },
  ];
  return (
    <section id="services" className="py-16 sm:py-24 scroll-mt-16">
      <Container>
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[#687892] dark:text-[#a0aec0] font-semibold tracking-wider uppercase text-3xl">
            {t("services.label")}
          </span>
          <h1 className="text-[#002b3d] dark:text-white text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            {t("services.title")}
          </h1>
          <p className="text-[#7a7777] dark:text-gray-400 max-w-[500px] mx-auto">
            {t("services.desc")}
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Decorative corner */}
              <div className={`absolute -top-10 -right-10 w-28 h-28 ${item.color} opacity-5 rounded-full group-hover:opacity-10 transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`${item.color} w-14 h-14 rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>

              <h2 className="text-[#002b3d] dark:text-white text-xl sm:text-2xl font-bold mb-3">
                {item.title}
              </h2>
              <p className="text-[#7a7777] dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                {item.desc}
              </p>

              <span className="inline-flex items-center gap-1.5 text-[#002b3d] dark:text-white text-sm font-semibold group-hover:gap-3 transition-all duration-300 cursor-pointer">
                {t("common.learnMore")}
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
