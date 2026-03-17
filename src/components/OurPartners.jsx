import Partner1 from "../../public/images/partner-1.png";

const partners = Array(6).fill(Partner1);

const OurPartners = () => {
  return (
    <section className="my-12 sm:my-16 md:my-24">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-[#002b3d] font-bold text-xl sm:text-2xl pb-2">
          Our Partners
        </h2>
        <p className="text-[#7a7777] text-sm sm:text-base max-w-md mx-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
          in quos ut consequuntur.
        </p>
      </div>

      <div className="overflow-hidden w-full">
        <ul className="flex logo-partners w-max">
          {[...partners, ...partners].map((src, index) => (
            <li key={index} className="opacity-30 hover:opacity-60 transition-opacity duration-300 px-4 sm:px-6 cursor-pointer shrink-0">
              <img src={src} alt="LogoIpsum logo" className="w-[200px] sm:w-[250px] md:w-[300px]" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurPartners;
