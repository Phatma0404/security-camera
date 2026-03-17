import Container from "./Container";
import { Facebook, Phone, Twitter, Youtube, MapPin, Mail } from "lucide-react";
import { CiClock2 } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "#", isHome: true },
  { name: "About Us", href: "#aboutUs" },
  { name: "Services", href: "#services" },
  { name: "Blog", href: "#blog" },
  { name: "Contact Us", href: "/contactUs", isRoute: true },
];

const quickLinks = [
  { name: "FAQs", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const socials = [
  { icon: <Facebook size={18} />, href: "https://www.facebook.com/" },
  { icon: <Twitter size={18} />, href: "https://twitter.com/" },
  { icon: <Youtube size={18} />, href: "https://www.youtube.com/" },
];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                eius luctus, nec ullamcorper mattis, pulvinar dapibus leo.
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
              <h4 className="font-semibold text-lg mb-5">Navigation</h4>
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
              <h4 className="font-semibold text-lg mb-5">Quick Link</h4>
              <ul className="space-y-3 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white hover:pl-2 transition-all duration-300 cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT INFO */}
            <div>
              <h4 className="font-semibold text-lg mb-5">Contact Info</h4>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <CiClock2 className="mt-0.5 shrink-0" size={18} />
                  <p className="text-white/70">
                    <span className="text-white font-medium">7 AM - 5 PM</span>, Mon - Sat
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 shrink-0" size={18} />
                  <p className="text-white/70">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 shrink-0" size={18} />
                  <p className="text-white/70">info@servicesecurity.com</p>
                </div>
              </div>
              <button className="flex items-center gap-2 bg-[#002b3d] px-5 py-2.5 rounded-lg text-sm hover:bg-[#001d2a] transition mt-6 cursor-pointer">
                <Phone size={16} />
                Call Us
              </button>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-white/20 my-10"></div>

          {/* BOTTOM */}
          <div className="text-center">
            <p className="text-sm text-white/60">
              © 2026 - Developed by Phatma Kiazumova · All Rights Reserved
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
