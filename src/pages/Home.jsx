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
import ScrollToTop from "../components/ScrollToTop";
import AboutHero from "../components/AboutHero";

const Home = () => {
  return (
    <div id="/">
      <Hero />
      <AboutHero />
      <Services />
      <ContactCTA />
      <WorkingProcess />
      <CustomerReviews />
      <SecuritySolutions />
      <Blog />
      <NewsletterForm />
    </div>
  );
};

export default Home;
