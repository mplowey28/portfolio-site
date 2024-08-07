import React, { useState } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/SideBar/Sidebar";
import Skills from "./Skills/Skills";
import Footer from "../components/Footer/Footer";
import Experience from "./Experience/Experience";
import Starfield from "../components/Starfield/Starfield";
import ProjectSlider from "./Projects/Projects";

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
      <About />
      <ProjectSlider />
      <Skills />
      <Experience />
      <Footer />
    </>
  );
};

export default Home;
