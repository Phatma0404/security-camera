import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import Navbar from "../components/Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import ContactCTA from "./ContactCTA";
import WorkingProcess from "../components/WorkingProcess";
import CustomerReviews from "../components/CustomerReviews";
import SecuritySolutions from "../components/SecuritySolutions";
import Blog from "./Blog";
import NewsletterForm from "../components/NewsletterForm";
import Footer from "../components/Footer";

const Home = () => {
  return (
    // <Container>
    <div>
      {/* Navbar */}
      <Navbar />

      <Hero />
      <About />
      <Services />
      <ContactCTA />
      <WorkingProcess />
      <CustomerReviews />
      <SecuritySolutions />
      <Blog />
      <NewsletterForm />
      <Footer />
    </div>
    // {/* </Container> */}
  );
};

export default Home;
