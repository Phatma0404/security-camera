import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import Container from "../components/Container";
import FAQ from "../components/FAQ";
import { useLanguage } from "../context/LanguageContext";

const FAQPage = () => {
  const { t } = useLanguage();

  return (
    <section className="pb-16 sm:pb-24">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#002b3d] via-[#003f56] to-[#002b3d] dark:from-[#0a0a0a] dark:via-[#1a1a1a] dark:to-[#0a0a0a] text-white py-16 sm:py-20 mb-12 sm:mb-16 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#687892]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-[#687892]/10 rounded-full blur-3xl" />
        <Container>
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <span className="inline-block text-white/70 font-semibold tracking-widest uppercase text-sm mb-3">
              {t("nav.faq")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              {t("faq.pageTitle")}
            </h1>
            <p className="text-white/70 text-base sm:text-lg">
              {t("faq.pageDesc")}
            </p>
          </div>
        </Container>
      </div>

      {/* All FAQ items */}
      <FAQ asPage />

      {/* CTA */}
      <Container>
        <div className="max-w-3xl mx-auto mt-12 sm:mt-16 bg-gradient-to-br from-[#002b3d] to-[#003f56] dark:from-[#1a1a1a] dark:to-[#0a0a0a] border border-gray-100 dark:border-gray-800 rounded-2xl p-8 sm:p-10 text-center text-white">
          <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-5">
            <MessageCircle size={24} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            {t("faq.stillQuestions")}
          </h2>
          <p className="text-white/70 mb-6 max-w-md mx-auto">
            {t("faq.stillQuestionsDesc")}
          </p>
          <Link
            to="/contactUs"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#002b3d] font-semibold px-6 py-3 rounded-lg transition-all hover:gap-3"
          >
            {t("nav.contact")}
            <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FAQPage;
