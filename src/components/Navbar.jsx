import Container from "./Container";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { ShieldCheck, ArrowRight, ShoppingBag } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { totalItems, openCart } = useCart();

  const handleNavClick = (e, item) => {
    e.preventDefault();
    if (item.isHome) {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
    } else if (item.isRoute) {
      navigate(item.href);
    } else {
      if (location.pathname === "/") {
        document
          .querySelector(item.href)
          ?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/" + item.href);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const navLinks = [
    { name: t("nav.home"), href: "#", isHome: true },
    { name: t("nav.about"), href: "/aboutUs", isRoute: true },
    { name: t("nav.services"), href: "/services", isRoute: true },
    { name: t("nav.products"), href: "/products", isRoute: true },
    { name: t("nav.blog"), href: "#blog" },
    { name: t("nav.faq"), href: "/faq", isRoute: true },
  ];

  return (
    <nav
      className={cn(
        "w-full sticky top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/90 dark:bg-[#1a1a1a]/90 backdrop-blur-md shadow-lg animate-[slideDown_0.4s_ease-out]"
          : "bg-white dark:bg-[#1a1a1a] shadow-sm",
      )}
    >
      <Container>
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-lg bg-[#002b3d] dark:bg-[#687892] flex items-center justify-center text-white group-hover:scale-105 transition-transform">
              <ShieldCheck size={20} />
            </div>
            <span className="text-lg font-bold text-[#003148] dark:text-white">
              ServiceSecurity
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap text-[#003148] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[#002b3d] dark:hover:text-white transition-all cursor-pointer"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side: cart, theme, lang, CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={openCart}
              aria-label="Open cart"
              className="relative text-[#003148] dark:text-white hover:text-[#687892] dark:hover:text-[#a0aec0] transition-colors cursor-pointer"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#005476] dark:bg-[#687892] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <ThemeToggle />
            <LanguageSwitcher />
            <Link
              to="/contactUs"
              className="ml-2 inline-flex items-center gap-1.5 bg-[#002b3d] hover:bg-[#003f56] dark:bg-[#687892] dark:hover:bg-[#7a8aa3] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:gap-2 shadow-sm hover:shadow-md whitespace-nowrap"
            >
              {t("nav.contact")}
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile right side: cart, theme + hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={openCart}
              aria-label="Open cart"
              className="relative text-[#003148] dark:text-white hover:text-[#687892] dark:hover:text-[#a0aec0] transition-colors cursor-pointer"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#005476] dark:bg-[#687892] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 flex flex-col justify-center items-center gap-[5px] cursor-pointer relative appearance-none bg-transparent border-none"
              aria-label="Toggle menu"
            >
              <span
                className={cn(
                  "block w-5 h-[2px] bg-[#002b3d] dark:bg-white rounded-full transition-all duration-300 origin-center",
                  isOpen && "rotate-45 translate-y-[7px]",
                )}
              />
              <span
                className={cn(
                  "block w-5 h-[2px] bg-[#002b3d] dark:bg-white rounded-full transition-all duration-300",
                  isOpen && "opacity-0 scale-x-0",
                )}
              />
              <span
                className={cn(
                  "block w-5 h-[2px] bg-[#002b3d] dark:bg-white rounded-full transition-all duration-300 origin-center",
                  isOpen && "-rotate-45 -translate-y-[7px]",
                )}
              />
            </button>
          </div>
        </div>

        {/* Backdrop */}
        <div
          className={cn(
            "fixed inset-0 z-40 bg-black/40 lg:hidden transition-opacity duration-300 cursor-pointer",
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed top-18 left-0 w-full z-50 lg:hidden transition-all duration-300 ease-out",
            isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0 pointer-events-none",
          )}
        >
          <div className="bg-white dark:bg-[#1a1a1a] shadow-lg border-t border-gray-100 dark:border-gray-800 p-6">
            <ul className="flex flex-col gap-1">
              {navLinks.map((item, index) => (
                <li
                  key={item.name}
                  className="transition-all duration-300"
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateY(0)" : "translateY(-8px)",
                  }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      setIsOpen(false);
                      handleNavClick(e, item);
                    }}
                    className="block px-4 py-3 rounded-lg text-[#003148] dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-3">
              <LanguageSwitcher />
              <Link
                to="/contactUs"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-1.5 bg-[#002b3d] dark:bg-[#687892] text-white text-sm font-semibold px-4 py-2 rounded-lg"
              >
                {t("nav.contact")}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
