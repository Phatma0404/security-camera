import { MailOpen, MapPin, Smartphone } from "lucide-react";
import Container from "../components/Container";

const Contact = () => {
  return (
    <section className="mb-3">
      {" "}
      <div className="bg-[#acbfdf] text-white p-6 rounded-lg">
        <h1 className="text-[56px] text-black font-bold leading-[3] tracking-wider text-center">
          Contact Us
        </h1>
        <p className="text-center max-w-[600px] place-self-center mb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
          natus aspernatur nesciunt! Modi id, aspernatur quibusdam corporis qui
          officiis dolore.
        </p>
      </div>
      <Container>
        {/* second */}
        <div className="flex justify-between mt-6 mt-20">
          <div className="flex-[2]">
            <form className="max-w-[600px]">
              <div className="flex gap-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  aria-label="Email"
                  className="w-1/2 bg-[#acbfdf] mb-8 p-2 rounded-full text-black"
                />
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  aria-label="Phone"
                  className="w-1/2 bg-[#acbfdf] mb-8 p-2 rounded-full text-black"
                />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                aria-label="Name"
                className="w-full bg-[#acbfdf] mb-8 p-2 rounded-full text-black"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className="w-full bg-[#acbfdf] mb-8 p-2 rounded-xl text-black"
              ></textarea>
              <input
                type="button"
                value="Submit"
                className="px-10 py-2 rounded-full bg-[#acbfdf] text-white"
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
            <div className="overlay absolute inset-0 bg-[rgba(104,120,146,0.8)]"></div>

            <div className="overlay-content absolute inset-0 flex flex-col px-7 py-15 text-white">
              <h3 className="font-bold text-xl mb-4">Our Newsletters</h3>
              <p className="mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, doloremque.
              </p>
              <form action="#">
                <input
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                  className="bg-[#fff] mb-4 w-full p-2 rounded-full text-black"
                />
                <input
                  type="button"
                  value="Submit Button"
                  className="w-full bg-[#000] p-2 rounded-full"
                />
              </form>
            </div>
          </div>
        </div>

        {/* third */}
        <div className="flex gap-15 mt-20 mb-12">
          {/* phone */}
          <div className="bg-[#9ab8ba] max-w-[380px] p-8 rounded-lg text-white">
            <div className="flex items-center gap-4 mb-4">
              <Smartphone />
              <span className="font-bold text-lg">(+994) 99 200 00 00</span>
            </div>

            <p className="pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              quis dolores!
            </p>
          </div>
          {/* email */}
          <div className="bg-[#cfe1e5] max-w-[380px] p-8 rounded-2xl">
            <div className=" flex items-center gap-4 mb-4">
              {" "}
              <MailOpen />
              <span className="font-bold text-lg">security@example.com</span>
            </div>
            <p className="pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              quis dolores!
            </p>
          </div>
          {/* location */}
          <div className="bg-[#fff] max-w-[380px] p-8 rounded-lg shadow-[1px_-1px_9px_5px_#d7d7d7]">
            <div className="flex items-center gap-4 mb-4">
              <MapPin />
              <span className="font-bold text-lg">Baku, Azerbaijan</span>
            </div>

            <p className="pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              quis dolores!
            </p>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97236.44637536081!2d49.772559262375786!3d40.394693997423566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku!5e0!3m2!1sen!2saz!4v1771362737494!5m2!1sen!2saz"
          height="450"
          className="border-0 w-full rounded-2xl mb-16"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>
    </section>
  );
};

export default Contact;
