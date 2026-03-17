import Container from "./Container";
import { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { cn } from "../lib/utils";
import { X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, item) => {
    e.preventDefault();
    if (item.isHome) {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
    } else {
      // anchor link (#aboutUs, #services, #blog)
      if (location.pathname === "/") {
        document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
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

  const navItems = [
    { name: "Home", href: "#", type: "link", isHome: true },
    { name: "About Us", href: "#aboutUs", type: "link" },
    { name: "Services", href: "#services", type: "link" },
    { name: "Blog", href: "#blog", type: "link" },
    { name: "Contact Us", href: "/contactUs", type: "link", isRoute: true },
    {
      name: "Facebook",
      href: "https://facebook.com",
      type: "social",
      icon: <FaFacebook />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      type: "social",
      icon: <FaTwitter />,
    },
    {
      name: "Youtube",
      href: "https://youtube.com",
      type: "social",
      icon: <FaYoutube />,
    },
  ];

  const links = navItems.filter((i) => i.type === "link");
  const socials = navItems.filter((i) => i.type === "social");

  return (
    <nav className={cn(
      "w-full sticky top-0 z-50 transition-all duration-500",
      scrolled
        ? "bg-white/95 backdrop-blur-sm shadow-lg py-0 animate-[slideDown_0.4s_ease-out]"
        : "bg-white shadow-md py-0"
    )}>
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="text-xl font-bold">
              ServiceSecurity
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8">
              {links.map(
                (item) =>
                  item.isRoute ? (
                    <Link
                      key={item.name}
                      to="/contactUs"
                      className={cn(
                        "tag_link",
                        "transition text-[#003148] font-semibold",
                        "hover:text-[#687892]",
                      )}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      className={cn(
                        "tag_link",
                        "transition text-[#003148] font-semibold",
                        "hover:text-[#687892] cursor-pointer",
                      )}
                    >
                      {item.name}
                    </a>
                  ),
              )}
              <div className="hidden md:flex items-center gap-4 pl-8 ml-8 border-l border-gray-300">
                {socials.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    className="text-xl text-[#003148] hover:text-[#687892] transition-colors"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </ul>

            {/* Hamburger Button  */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-[6px] cursor-pointer relative appearance-none bg-transparent border-none"
              aria-label="Toggle menu"
            >
              <span className={cn(
                "block w-6 h-[2px] bg-[#002b3d] rounded-full transition-all duration-300 origin-center",
                isOpen && "rotate-45 translate-y-[8px]"
              )} />
              <span className={cn(
                "block w-6 h-[2px] bg-[#002b3d] rounded-full transition-all duration-300",
                isOpen && "opacity-0 scale-x-0"
              )} />
              <span className={cn(
                "block w-6 h-[2px] bg-[#002b3d] rounded-full transition-all duration-300 origin-center",
                isOpen && "-rotate-45 -translate-y-[8px]"
              )} />
            </button>
          </div>
        </div>
        <hr className="border-1 text-[#ebebeb]" />

        {/* Backdrop */}
        <div
          className={cn(
            "fixed inset-0 z-40 bg-black/30 md:hidden transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed top-16 left-0 w-full z-50 md:hidden transition-all duration-300 ease-out",
            isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0 pointer-events-none"
          )}
        >
          <div className="bg-white shadow-lg p-6">
            <ul className="flex flex-col items-center space-y-4 py-4">
              {links.map((item, index) => (
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
                      if (!item.isRoute) handleNavClick(e, item);
                    }}
                    className="text-[#003148] font-medium hover:text-[#687892] transition-colors cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-row items-center justify-center gap-8">
              {socials.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="text-xl text-[#003148] hover:text-[#687892] transition-colors"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
