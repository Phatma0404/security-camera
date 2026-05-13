import Partner1 from "../../public/images/partner-1.png";
import Partner2 from "../../public/images/partner-2.jpg";
import Partner3 from "../../public/images/partner-3.jpg";
import { useLanguage } from "../context/LanguageContext";

const partners = [Partner1, Partner2, Partner3, Partner1, Partner2, Partner3];

const OurPartners = () => {
  const { t } = useLanguage();
  return (
    <section className="my-12 sm:my-16 md:my-24">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-[#002b3d] dark:text-white font-bold text-2xl sm:text-3xl md:text-4xl pb-3">
          {t("partners.title")}
        </h2>"ServiceSecurity transformed how we protect our office. The installation was seamless and the 24/7 monitoring gives us complete peace of mind. Highly recommended!"
        <div className="w-12 h-[3px] bg-[#005476] dark:bg-[#687892] mx-auto mb-4 rounded-full" />
        <p className="text-[#7a7777] dark:text-gray-400 text-sm sm:text-base max-w-md mx-auto">
          {t("partners.desc")}
        </p>
      </div>

      <div className="bg-gray-50 dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden divide-y divide-gray-200 dark:divide-gray-800">
        {/* Row 1: scrolls left */}
        <div className="overflow-hidden w-full group">
          <ul className="flex logo-partners w-max group-hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((src, index) => (
              <li
                key={`row1-${index}`}
                className="shrink-0 w-[160px] sm:w-[200px] md:w-[240px] h-20 sm:h-24 md:h-28 flex items-center justify-center px-6 border-r border-gray-200 dark:border-gray-800"
              >
                <img
                  src={src}
                  alt="Partner logo"
                  className="max-w-full max-h-10 sm:max-h-12 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 dark:invert dark:hover:invert-0"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Row 2: scrolls right */}
        <div className="overflow-hidden w-full group">
          <ul className="flex logo-partners-reverse w-max group-hover:[animation-play-state:paused]">
            {[...partners.slice().reverse(), ...partners.slice().reverse()].map(
              (src, index) => (
                <li
                  key={`row2-${index}`}
                  className="shrink-0 w-[160px] sm:w-[200px] md:w-[240px] h-20 sm:h-24 md:h-28 flex items-center justify-center px-6 border-r border-gray-200 dark:border-gray-800"
                >
                  <img
                    src={src}
                    alt="Partner logo"
                    className="max-w-full max-h-10 sm:max-h-12 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 dark:invert dark:hover:invert-0"
                  />
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
