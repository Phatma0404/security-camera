import React from "react";
import Container from "./Container";
import { Facebook, Phone, Twitter, Youtube } from "lucide-react";
import { CiClock2 } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-[#7d8aa3] text-white footer-section">
      <Container>
        <div className="px-6 py-16">
          {/* TOP */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {/* ABOUT */}
            <div>
              <p className="text-sm leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                eius luctus, nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="flex gap-3">
                <a
                  className="bg-[#003f56] p-2 rounded-md cursor-pointer"
                  href="https://www.facebook.com/" target="_blank"
                >
                  <Facebook size={18} />
                </a>
                <a className="bg-[#003f56] p-2 rounded-md cursor-pointer" href="https://twitter.com/" target="_blank">
                  <Twitter size={18} />
                </a>
                <a className="bg-[#003f56] p-2 rounded-md cursor-pointer" href="https://www.youtube.com/" >
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            {/* NAVIGATION */}
            <div className="md:ml-4 sm:ml-0">
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm cursor-pointer">
                <li>Home</li>
                <li>Pages</li>
                <li>About Us</li>
                <li>Services</li>
                <li>404</li>
              </ul>
            </div>

            {/* QUICK LINK */}
            <div>
              <h4 className="font-semibold mb-4">Quick Link</h4>
              <ul className="space-y-2 text-sm cursor-pointer">
                <li>Contact Us</li>
                <li>FAQs</li>
                <li>Blog</li>
                <li>Gallery</li>
                <li>Pricing</li>
              </ul>
            </div>

            {/* WORK HOURS */}
            <div>
              <h4 className="font-semibold mb-4">Work Hours</h4>
              <p className="text-sm mb-4 flex items-center gap-2">
                <CiClock2 />
                <span className="font-semibold">7 AM - 5 PM</span>, Mon - Sat
              </p>
              <address className="text-sm mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </address>
              <button className="flex items-center gap-2 bg-[#003f56] px-5 py-2 rounded-md text-sm hover:bg-[#002b3d] transition cursor-pointer">
                <Phone size={16} />
                Call Us
              </button>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-white/30 my-10"></div>

          {/* BOTTOM */}
          <p className="text-center text-sm text-white/80">
            © 2026 - Developed by Phatma Kiazumova · All Rights Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
