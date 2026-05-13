import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import ContactCTA from "./ContactCTA";
import WorkingProcess from "../components/WorkingProcess";
import CustomerReviews from "../components/CustomerReviews";
import SecuritySolutions from "../components/SecuritySolutions";
import Blog from "./Blog";
import AboutHero from "../components/AboutHero";
import FAQ from "../components/FAQ";
import Reveal from "../components/Reveal";

const Home = () => {
  return (
    <div>
      <Hero />
      <Reveal variant="fade-up">
        <AboutHero />
      </Reveal>
      <Reveal variant="fade-up" delay={50}>
        <Services />
      </Reveal>
      <Reveal variant="fade-up">
        <ContactCTA />
      </Reveal>
      <Reveal variant="fade-up">
        <WorkingProcess />
      </Reveal>
      <Reveal variant="fade-up">
        <CustomerReviews />
      </Reveal>
      <Reveal variant="fade-up">
        <SecuritySolutions />
      </Reveal>
      <Reveal variant="fade-up">
        <Blog />
      </Reveal>
      <Reveal variant="fade-up">
        <FAQ limit={5} />
      </Reveal>
    </div>
  );
};

export default Home;
