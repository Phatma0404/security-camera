import Container from "./Container";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { cn } from "../lib/utils";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero", type: "link" },
    { name: "About Us", href: "#aboutus", type: "link" },
    { name: "Services", href: "#services", type: "link" },
    { name: "Blog", href: "#blog", type: "link" },
    { name: "Contact Us", href: "#contactus", type: "link" },
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
    <nav className="w-full bg-white shadow-md">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="text-xl font-bold">
              ServiceSecurity
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8">
              {links.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={cn(
                      "a-tag",
                      "transition text-[#003148] font-semibold",
                      "hover:text-[#687892]",
                    )}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <div className="hidden md:flex items-center gap-4 pl-12">
                {socials.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    className="text-xl hover:text-blue-500 transition"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </ul>

            {/* Hamburger Button  */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-2xl cursor-pointer"
            >
              ☰
            </button>
          </div>
        </div>
        <hr className="border-1 text-[#ebebeb]" />
        {/* Mobile Menu */}

        {isOpen && (
          <div className="fixed inset-0 z-50 md:hidden ">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsOpen(false)}
            ></div>
            <div className="absolute top-0 w-full bg-white shadow-lg p-6">
              <button
                className="cursor-pointer right-0 absolute"
                onClick={() => setIsOpen(false)}
              >
                <X />
              </button>

              <ul className="flex flex-col items-center space-y-4 py-4">
                {links.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="hover:text-blue-500 transition"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-row items-center justify-center gap-40">
                {socials.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    className="text-xl hover:text-blue-500 transition"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
