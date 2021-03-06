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
import Timeline from "../components/Timeline";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<SideBar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<Hero />
			<InfoSection {...homeObjOne} />
			<Timeline />
			<Skills />
			<Experience />
			<Contact />
			<Footer />
		</>
	);
};

export default Home;
