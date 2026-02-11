import { Bell, Camera, MoveRight, Zap } from "lucide-react";
import Container from "../components/Container";
import LearnMore from "../components/LearnMore";

const Services = () => {
  const services = [
    {
      icon: <Camera size={25} />,
      title: "Security Camera",
      desc: "We bring the right people together to challenge established thinking and drive transform in 2020",
    },
    {
      icon: <Bell size={25} />,
      title: "Fire Detection",
      desc: "We bring the right people together to challenge established thinking and drive transform in 2020",
    },
    {
      icon: <Zap size={25} />,
      title: "Smart Home",
      desc: "We bring the right people together to challenge established thinking and drive transform in 2020",
    },
  ];

  const buttonStyle = {
    backgroundColor: "#687892",
    color: "#FFF",
    borderRadius: "4px",
    padding: "0.65rem 2rem",
    cursor: "pointer",
  };

  return (
    <section>
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mt-12">
          <div className="max-w-[500px] leading-none">
            <h1 className="text-[#002b3d] text-[60px] font-bold">
              We Provide The Best Services
            </h1>
          </div>

          <div>
            <p className="text-[#7a7777]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              hic quae illo ratione ab!
            </p>
            <button className="flex flex-row gap-1 items-center text-[#002b3d]">
              Learn More
              <MoveRight className="pt-1" size={20} color="#002b3d" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between flex-col md:flex-row text-center my-16 gap-12">
          {services.map((item, index) => (
            <div key={index}>
              <div className="flex justify-center text-[#7a7777]">
                {item.icon}
              </div>
              <h2 className="text-[#002b3d] text-[28px] font-semibold">
                {item.title}
              </h2>
              <p className="text-[#7a7777] my-3 max-w-[300px]">{item.desc}</p>
              <button style={buttonStyle}>Learn More</button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
