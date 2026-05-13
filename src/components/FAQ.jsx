import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import Container from "./Container";
import { useLanguage } from "../context/LanguageContext";
import { faqData } from "../data/faqData";
import { cn } from "../lib/utils";

const FAQItem = ({ item, isOpen, onToggle }) => (
  <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden transition-shadow hover:shadow-md">
    <button
      onClick={onToggle}
      aria-expanded={isOpen}
      className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
    >
      <span className="text-base sm:text-lg font-semibold text-[#002b3d] dark:text-white">
        {item.question}
      </span>
      <span
        className={cn(
          "shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-[#002b3d] dark:text-white transition-transform duration-300",
          isOpen && "rotate-180 bg-[#002b3d] dark:bg-[#687892] text-white"
        )}
      >
        <ChevronDown size={18} />
      </span>
    </button>
    <div
      className={cn(
        "grid transition-all duration-300 ease-out",
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      )}
    >
      <div className="overflow-hidden">
        <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-[#7a7777] dark:text-gray-400 leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  </div>
);

const FAQ = ({ limit, showCta = true, asPage = false }) => {
  const { t, language } = useLanguage();
  const [openId, setOpenId] = useState(null);

  const items = faqData[language] || faqData.en;
  const visible = limit ? items.slice(0, limit) : items;

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className={cn(
        "scroll-mt-24",
        asPage ? "" : "py-16 sm:py-24 bg-gray-50 dark:bg-[#0a0a0a]"
      )}
    >
      <Container>
        {!asPage && (
          <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
            <span className="text-[#687892] dark:text-[#a0aec0] font-semibold tracking-wider uppercase text-sm">
              {t("faq.label")}
            </span>
            <h2 className="text-[#002b3d] dark:text-white text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
              {t("faq.title")}
            </h2>
            <p className="text-[#7a7777] dark:text-gray-400">{t("faq.desc")}</p>
          </div>
        )}

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {visible.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>

        {showCta && limit && items.length > limit && (
          <div className="text-center mt-10">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 bg-[#002b3d] hover:bg-[#003f56] dark:bg-[#687892] dark:hover:bg-[#7a8aa3] text-white font-semibold px-6 py-3 rounded-lg transition-all hover:gap-3 shadow-sm hover:shadow-md"
            >
              {t("faq.viewAll")}
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
};

export default FAQ;
