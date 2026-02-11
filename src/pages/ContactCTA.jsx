import Container from "../components/Container";
import LearnMore from "../components/LearnMore";
import { cn } from "../lib/utils";

const ContactCTA = () => {
  const buttonStyle = {
    backgroundColor: "#005476",
    color: "#FFF",
    borderRadius: "6px",
    padding: "0.65rem 1.2rem",
    cursor: "pointer",
  };

  return (
    <section
      className="bg-[url('https://i.pinimg.com/736x/a1/23/35/a12335713917dc975cf740a18ade5e3a.jpg')]
    bg-no-repeat
    bg-center
    bg-fixed
    bg-cover contactCta-section"
    >
      <Container>
        <div className="flex sm:flex-row flex-col items-center pt-20 justify-between pb-15 mb-15">
          {/* first div */}
          <div className="pb-3 max-w-[350px]">
            <h1 className="text-[#fff] text-4xl font-bold  pb-3">
              Monitor the Workplace From your Phone
            </h1>
            <p className="text-[#e9e9e9] pb-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
              alias, dolore et tempora obcaecati minus commodi. Nobis dolore
              pariatur modi quibusdam sint. Unde, placeat laboriosam. Expedita
              commodi minima error ipsum?
            </p>
            <LearnMore bg="bg-[#005476]" />
          </div>
          {/* second div */}
          <div>
            <form action="#" className="flex flex-col">
              <h3 className="text-white text-2xl font-bold mb-6">
                Latest Innovation
              </h3>
              <label htmlFor="#"></label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Email"
                className={cn(
                  "bg-transparent text-white mb-3 py-2 px-2 border-1 border-[#fff] placeholder:text-white w-72 rounded-lg placeholder:text-sm",
                  "focus:outline-none",
                )}
              />

              <select
                className={cn(
                  "bg-transparent mb-3 border-1 border-[#fff] py-2 px-1 rounded-lg w-72 cursor-pointer text-white",
                  "focus:outline-none",
                )}
                name=""
                id=""
              >
                <option value="select">
                  Select
                </option>
                <option value="select1">Select</option>
              </select>
              <textarea
                className={cn(
                  "bg-transparent py-2 px-2 border-1 border-[#fff] mb-4 text-white placeholder:text-white w-72 rounded-lg placeholder:text-sm",
                  "focus:outline-none",
                )}
                rows={4}
                name=""
                id=""
                placeholder="Messages"
              ></textarea>
            </form>
            <button type="submit" className="bg-[#005476] text-white rounded-md px-5 py-2.5 hover:bg-[#003f56] transition cursor-pointer">
              Submit Button
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactCTA;
