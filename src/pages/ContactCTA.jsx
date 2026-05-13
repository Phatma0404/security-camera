import Container from "../components/Container";
import LearnMore from "../components/LearnMore";
import { Phone, Shield, Wifi } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const inputClass =
  "w-full bg-white/10 backdrop-blur-sm text-white py-3 px-4 border border-white/30 placeholder:text-white/70 rounded-lg text-sm focus:outline-none focus:border-white/60 transition-colors";

const ContactCTA = () => {
  const { t } = useLanguage();
  const highlights = [
    { icon: <Phone size={20} />, text: t("contactCta.remoteMonitoring") },
    { icon: <Shield size={20} />, text: t("contactCta.protection") },
    { icon: <Wifi size={20} />, text: t("contactCta.smartAlerts") },
  ];
  return (
    <section className="contactCta-section">
      <Container>
        <div className="flex flex-col lg:flex-row items-center py-16 sm:py-20 lg:py-24 gap-12 lg:gap-20">
          {/* left - content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block text-white/80 text-2xl font-semibold tracking-wider uppercase mb-3">
              {t("contactCta.label")}
            </span>
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {t("contactCta.title")}
            </h1>
            <p className="text-white/80 mb-8 max-w-[480px] mx-auto lg:mx-0">
              {t("contactCta.desc")}
            </p>

            {/* highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-white/90">
                  <div className="bg-white/15 p-2 rounded-lg">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <LearnMore bg="bg-[#005476] hover:bg-[#003f56]" />
          </div>

          {/* right - form */}
          <div className="w-full sm:w-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                {t("contactCta.quoteTitle")}
              </h3>
              <p className="text-white/60 text-sm mb-6">{t("contactCta.quoteSubtitle")}</p>

              <form className="flex flex-col gap-3 w-full sm:w-72">
                <input
                  type="email"
                  placeholder={t("contactCta.emailPlaceholder")}
                  className={inputClass}
                />
                <select className={`${inputClass} cursor-pointer`}>
                  <option value="" className="bg-[#002b3d] text-white">{t("contactCta.selectService")}</option>
                  <option value="camera" className="bg-[#002b3d] text-white">{t("services.camera")}</option>
                  <option value="fire" className="bg-[#002b3d] text-white">{t("services.fire")}</option>
                  <option value="smart" className="bg-[#002b3d] text-white">{t("services.smart")}</option>
                </select>
                <textarea
                  className={`${inputClass} resize-none`}
                  rows={4}
                  placeholder={t("contactCta.messagePlaceholder")}
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#005476] text-white rounded-lg py-3 font-semibold hover:bg-[#003f56] transition cursor-pointer mt-1"
                >
                  {t("contactCta.submit")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactCTA;
