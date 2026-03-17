import Container from "../components/Container";
import LearnMore from "../components/LearnMore";
import { Phone, Shield, Wifi } from "lucide-react";

const highlights = [
  { icon: <Phone size={20} />, text: "Remote Monitoring" },
  { icon: <Shield size={20} />, text: "24/7 Protection" },
  { icon: <Wifi size={20} />, text: "Smart Alerts" },
];

const inputClass =
  "w-full bg-white/10 backdrop-blur-sm text-white py-3 px-4 border border-white/30 placeholder:text-white/70 rounded-lg text-sm focus:outline-none focus:border-white/60 transition-colors";

const ContactCTA = () => {
  return (
    <section className="contactCta-section">
      <Container>
        <div className="flex flex-col lg:flex-row items-center py-16 sm:py-20 lg:py-24 gap-12 lg:gap-20">
          {/* left - content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block text-white/80 text-sm font-semibold tracking-wider uppercase mb-3">
              Smart Security
            </span>
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Monitor the Workplace From your Phone
            </h1>
            <p className="text-white/80 mb-8 max-w-[480px] mx-auto lg:mx-0">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
              alias, dolore et tempora obcaecati minus commodi. Nobis dolore
              pariatur modi quibusdam sint.
            </p>

            {/* highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-white/90">
                  <div className="bg-white/15 p-2 rounded-lg">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <LearnMore bg="bg-[#005476] hover:bg-[#003f56]" />
          </div>

          {/* right - form */}
          <div className="w-full sm:w-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                Get a Free Quote
              </h3>
              <p className="text-white/60 text-sm mb-6">Fill in the details below</p>

              <form className="flex flex-col gap-3 w-full sm:w-72">
                <input
                  type="email"
                  placeholder="Email address"
                  className={inputClass}
                />
                <select className={`${inputClass} cursor-pointer`}>
                  <option value="" className="bg-[#002b3d] text-white">Select service</option>
                  <option value="camera" className="bg-[#002b3d] text-white">Security Camera</option>
                  <option value="fire" className="bg-[#002b3d] text-white">Fire Detection</option>
                  <option value="smart" className="bg-[#002b3d] text-white">Smart Home</option>
                </select>
                <textarea
                  className={`${inputClass} resize-none`}
                  rows={4}
                  placeholder="Your message"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#005476] text-white rounded-lg py-3 font-semibold hover:bg-[#003f56] transition cursor-pointer mt-1"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactCTA;
