import Partner1 from "../../public/images/partner-1.png";
import Partner2 from "../../public/images/partner-2.jpg";
import Partner3 from "../../public/images/partner-3.jpg";

const OurPartners = () => {
  return (
    <section className="my-32">
      <ul className="flex items-center flex-col md:flex-row">
        <li>
          <h2 className="text-[#002b3d] font-bold text-2xl pb-4">
            Our Partners
          </h2>
          <p className="text-[#7a7777]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            in quos ut consequuntur.
          </p>
        </li>
        <li className="opacity-30 pt-6">
          <img src={Partner1} alt="LogoIpsum logo" width={400} />
        </li>
        <li className="opacity-30 pt-6">
          {" "}
          <img src={Partner1} alt="LogoIpsum logo" width={400} />
        </li>
        <li className="opacity-30 pt-6">
          {" "}
          <img src={Partner1} alt="LogoIpsum logo" width={400} />
        </li>
      </ul>
    </section>
  );
};

export default OurPartners;
