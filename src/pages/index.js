import React, { useState } from "react";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Slider from "../components/Slider";
import Starfield from "../components/Starfield";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Starfield />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <InfoSection {...homeObjOne} />
      <Slider />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
