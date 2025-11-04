import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
// We'll import Services here next!

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-[#16222A] to-[#3A6073]">
      <Navbar />
      <Hero />

      {/* We'll add these sections next: */}
      <Services />
      <Gallery />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
