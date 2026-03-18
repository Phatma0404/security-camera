import { MailOpen, MapPin, Smartphone } from "lucide-react";
import Container from "../components/Container";

const Contact = () => {
  return (
    <section className="mb-3">
      {" "}
      <div className="bg-[#002b3d] text-white p-6 rounded-lg">
        <h1 className="text-[56px] text-white font-extrabold leading-[3] tracking-wider text-center">
          Contact Us
        </h1>
        <p className="text-center text-white/70 max-w-[600px] place-self-center mb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
          natus aspernatur nesciunt! Modi id, aspernatur quibusdam corporis qui
          officiis dolore.
        </p>
      </div>
      <Container>
        {/* second */}
        <div className="flex flex-col md:flex-row lg:flex- justify-between mt-6 mt-20">
          <div className="flex-[2]">
            <form className="max-w-[600px]">
              <div className="flex gap-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  aria-label="Email"
                  className="w-1/2 bg-gray-100 mb-8 p-2 px-4 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-[#687892]/30"
                />
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  aria-label="Phone"
                  className="w-1/2 bg-gray-100 mb-8 p-2 px-4 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-[#687892]/30"
                />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                aria-label="Name"
                className="w-full bg-gray-100 mb-8 p-2 px-4 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-[#687892]/30"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className="w-full bg-gray-100 mb-8 p-2 px-4 rounded-xl text-black resize-none focus:outline-none focus:ring-2 focus:ring-[#687892]/30"
                rows="5"

              ></textarea>
              <input
                type="button"
                value="Submit"
                className="px-10 py-2 rounded-full bg-[#002b3d] text-white cursor-pointer hover:bg-[#687892] transition-colors duration-300 mb-3"
              />
            </form>
          </div>

          {/* second second */}

          <div className="relative flex-1 rounded-3xl overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/6d/1d/f3/6d1df3c439c6b943e66a614255334540.jpg"
              alt="call-center"
              className="h-full object-cover"
            />
            <div className="overlay absolute inset-0 bg-[rgba(0,43,61,0.85)]"></div>

            <div className="overlay-content absolute inset-0 flex flex-col px-7 py-15 text-white">
              <h3 className="font-bold text-xl mb-4">Our Newsletters</h3>
              <p className="mb-6 text-white/70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, doloremque.
              </p>
              <form action="#">
                <input
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                  className="bg-white/10 backdrop-blur-sm mb-4 w-full py-3 px-4 rounded-full text-white placeholder:text-white/60 border border-white/20 focus:outline-none focus:border-white/50"
                />
                <input
                  type="button"
                  value="Submit Button"
                  className="w-full bg-[#687892] hover:bg-[#005476] transition-colors duration-300 p-3 rounded-full cursor-pointer text-white"
                />
              </form>
            </div>
          </div>
        </div>

        {/* third */}
        <div className="flex md:flex-3 lg:flex-row place-self-center flex-col gap-15 mt-20 mb-12">
          {/* phone */}
          <div className="bg-[#002b3d] max-w-[380px] p-8 rounded-2xl text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/10 p-2.5 rounded-lg">
                <Smartphone size={20} />
              </div>
              <span className="font-bold text-lg">(+994) 99 200 00 00</span>
            </div>

            <p className="text-white/70 pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              quis dolores!
            </p>
          </div>
          {/* email */}
          <div className="bg-[#687892] max-w-[380px] p-8 rounded-2xl text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/10 p-2.5 rounded-lg">
                <MailOpen size={20} />
              </div>
              <span className="font-bold text-lg">security@example.com</span>
            </div>
            <p className="text-white/70 pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              quis dolores!
            </p>
          </div>
          {/* location */}
          <div className="bg-white max-w-[380px] p-8 rounded-2xl border border-gray-100 shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#002b3d] text-white p-2.5 rounded-lg">
                <MapPin size={20} />
              </div>
              <span className="font-bold text-lg text-[#002b3d]">Baku, Azerbaijan</span>
            </div>

            <p className="text-[#7a7777] pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              quis dolores!
            </p>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97236.44637536081!2d49.772559262375786!3d40.394693997423566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku!5e0!3m2!1sen!2saz!4v1771362737494!5m2!1sen!2saz"
          height="450"
          className="border-0 w-full rounded-2xl mb-16"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>
    </section>
  );
};

export default Contact;
