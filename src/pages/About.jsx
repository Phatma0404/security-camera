import AboutHero from "../components/AboutHero";
import WorkingProcess from "../components/WorkingProcess";
import Reveal from "../components/Reveal";

const About = () => {
  return (
    <div>
      <AboutHero />
      <Reveal variant="fade-up">
        <WorkingProcess />
      </Reveal>
    </div>
  );
};

export default About;
