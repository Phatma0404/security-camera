import Container from "./Container";
import { Facebook, Phone, Twitter, Youtube, MapPin, Mail } from "lucide-react";
import { CiClock2 } from "react-icons/ci";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const socials = [
  { icon: <Facebook size={18} />, href: "https://www.facebook.com/" },
  { icon: <Twitter size={18} />, href: "https://twitter.com/" },
  { icon: <Youtube size={18} />, href: "https://www.youtube.com/" },
];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const navLinks = [
    { name: t("nav.home"), href: "#", isHome: true },
    { name: t("nav.about"), href: "#aboutUs" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.blog"), href: "#blog" },
    { name: t("nav.contact"), href: "/contactUs", isRoute: true },
  ];

  const quickLinks = [
    { name: t("footer.faqs"), href: "/faq", isRoute: true },
    { name: t("footer.gallery"), href: "#" },
    { name: t("footer.pricing"), href: "#" },
    { name: t("footer.privacy"), href: "#" },
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    if (link.isHome) {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
    } else if (link.isRoute) {
      navigate(link.href);
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="footer-section text-white relative">
      <Container>
        <div className="py-16 sm:py-20">
          {/* TOP */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
            {/* BRAND */}
            <div>
              <h3 className="text-xl font-bold mb-4">ServiceSecurity</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {t("footer.brandDesc")}
              </p>
              <div className="flex gap-3">
                {socials.map((item, index) => (
                  <a
                    key={index}
                    className="bg-white/10 p-2.5 rounded-lg hover:bg-[#002b3d] transition-colors duration-300 cursor-pointer"
                    href={item.href}
                    target="_blank"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* NAVIGATION */}
            <div>
              <h4 className="font-semibold text-lg mb-5">{t("footer.navigation")}</h4>
              <ul className="space-y-3 text-sm">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link)}
                      className="text-white/70 hover:text-white hover:pl-2 transition-all duration-300 cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* QUICK LINK */}
            <div>
              <h4 className="font-semibold text-lg mb-5">{t("footer.quickLink")}</h4>
              <ul className="space-y-3 text-sm">
                {quickLinks.map((link) =>
                  link.isRoute ? (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-white/70 hover:text-white hover:pl-2 transition-all duration-300 cursor-pointer inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ) : (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-white hover:pl-2 transition-all duration-300 cursor-pointer"
                      >
                        {link.name}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* CONTACT INFO */}
            <div>
              <h4 className="font-semibold text-lg mb-5">{t("footer.contactInfo")}</h4>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <CiClock2 className="mt-0.5 shrink-0" size={18} />
                  <p className="text-white/70">
                    <span className="text-white font-medium">{t("footer.hours")}</span>{t("footer.hoursSuffix")}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 shrink-0" size={18} />
                  <p className="text-white/70">{t("footer.address")}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 shrink-0" size={18} />
                  <p className="text-white/70">info@servicesecurity.com</p>
                </div>
              </div>
              <button className="flex items-center gap-2 bg-[#002b3d] px-5 py-2.5 rounded-lg text-sm hover:bg-[#001d2a] transition mt-6 cursor-pointer">
                <Phone size={16} />
                {t("footer.callUs")}
              </button>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-white/20 my-10"></div>

          {/* BOTTOM */}
          <div className="text-center">
            <p className="text-sm text-white/60">
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
