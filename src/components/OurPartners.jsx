import Partner1 from "../../public/images/partner-1.png";

const OurPartners = () => {
  return (
    <section className="my-32">
      <div className="flex items-center flex-col md:flex-row">
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-[#002b3d] font-bold text-2xl pb-4">
            Our Partners
          </h2>
          <p className="text-[#7a7777]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            in quos ut consequuntur.
          </p>
        </div>

        <div className="overflow-hidden w-full">
          <ul className="flex logo-partners w-max">
            <li className="opacity-30 pt-6 cursor-pointer">
              {" "}
              <img src={Partner1} alt="LogoIpsum logo" width={350} />
            </li>
            <li className="opacity-30 pt-6 cursor-pointer">
              {" "}
              <img src={Partner1} alt="LogoIpsum logo" width={350} />
            </li>
            <li className="opacity-30 pt-6 cursor-pointer">
              {" "}
              <img src={Partner1} alt="LogoIpsum logo" width={350} />
            </li>
            <li className="opacity-30 pt-6 cursor-pointer">
              {" "}
              <img src={Partner1} alt="LogoIpsum logo" width={350} />
            </li>
            <li className="opacity-30 pt-6 cursor-pointer">
              {" "}
              <img src={Partner1} alt="LogoIpsum logo" width={350} />
            </li>
            <li className="opacity-30 pt-6 cursor-pointer">
              {" "}
              <img src={Partner1} alt="LogoIpsum logo" width={300} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
