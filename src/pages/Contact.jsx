import { Mail, MapPin, Phone, Clock, Send, ArrowRight } from "lucide-react";
import Container from "../components/Container";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: <Phone size={22} />,
      label: t("contact.phone"),
      value: "(+994) 99 200 00 00",
      href: "tel:+994992000000",
    },
    {
      icon: <Mail size={22} />,
      label: t("contact.email"),
      value: "info@servicesecurity.com",
      href: "mailto:info@servicesecurity.com",
    },
    {
      icon: <MapPin size={22} />,
      label: t("contact.hoursLabel"),
      value: t("footer.address"),
    },
    {
      icon: <Clock size={22} />,
      label: t("footer.hours") + t("footer.hoursSuffix"),
      value: t("contact.contactDesc"),
    },
  ];

  return (
    <section className="pb-16 sm:pb-24">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#002b3d] via-[#003f56] to-[#002b3d] dark:from-[#0a0a0a] dark:via-[#1a1a1a] dark:to-[#0a0a0a] text-white py-16 sm:py-20 mb-12 sm:mb-16 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#687892]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-[#687892]/10 rounded-full blur-3xl" />
        <Container>
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <span className="inline-block text-white/70 font-semibold tracking-widest uppercase text-sm mb-3">
              {t("nav.contact")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              {t("contact.title")}
            </h1>
            <p className="text-white/70 text-base sm:text-lg">
              {t("contact.desc")}
            </p>
          </div>
        </Container>
      </div>

      <Container>
        {/* Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 mb-16">
          {/* Form */}
          <div className="lg:col-span-3 bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 sm:p-8 lg:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#002b3d] dark:text-white mb-2">
              {t("contactCta.quoteTitle")}
            </h2>
            <p className="text-[#7a7777] dark:text-gray-400 mb-8">
              {t("contactCta.quoteSubtitle")}
            </p>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#002b3d] dark:text-gray-300 mb-2"
                  >
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={t("contact.name")}
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-sm text-[#002b3d] dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-[#687892] focus:ring-2 focus:ring-[#687892]/20 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#002b3d] dark:text-gray-300 mb-2"
                  >
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-sm text-[#002b3d] dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-[#687892] focus:ring-2 focus:ring-[#687892]/20 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#002b3d] dark:text-gray-300 mb-2"
                >
                  {t("contact.phone")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(+994) 99 200 00 00"
                  className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-sm text-[#002b3d] dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-[#687892] focus:ring-2 focus:ring-[#687892]/20 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#002b3d] dark:text-gray-300 mb-2"
                >
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder={t("contactCta.messagePlaceholder")}
                  className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-sm text-[#002b3d] dark:text-white placeholder:text-gray-400 resize-none focus:outline-none focus:border-[#687892] focus:ring-2 focus:ring-[#687892]/20 transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#002b3d] hover:bg-[#003f56] dark:bg-[#687892] dark:hover:bg-[#7a8aa3] text-white font-semibold px-8 py-3 rounded-lg transition-all hover:gap-3 shadow-sm hover:shadow-md cursor-pointer"
              >
                <Send size={16} />
                {t("contact.submit")}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-100 dark:border-gray-800 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-[#002b3d] dark:bg-[#687892] text-white flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[#002b3d] dark:text-white font-semibold mb-1">
                      {item.label}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-[#7a7777] dark:text-gray-400 hover:text-[#687892] transition-colors break-words"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-[#7a7777] dark:text-gray-400 break-words">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
          <iframe
            title="Office location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97236.44637536081!2d49.772559262375786!3d40.394693997423566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku!5e0!3m2!1sen!2saz!4v1771362737494!5m2!1sen!2saz"
            height="420"
            className="border-0 w-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
