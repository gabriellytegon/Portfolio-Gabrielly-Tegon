import "./App.css";
import { Menu } from "./components/menu";
import { Home } from "./components/home";
import { AboutMe } from "./components/aboutMe";
import { Experience } from "./components/experiences";
import { Skills } from "./components/skills";
import { Contact } from "./components/contact";
import { Carousel } from "./components/carousel/Carousel";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="page">
      <Menu></Menu>
      <div id="home">
        <Home></Home>
      </div>
      <div id="aboutMe">
        <AboutMe></AboutMe>
      </div>
      <div id="carousel" data-aos="zoom-in">
        <Carousel></Carousel>
      </div>
      <div id="experiences" data-aos="fade-up">
        <Experience></Experience>
      </div>
      <div id="skills" data-aos="zoom-in">
        <Skills></Skills>
      </div>
      <div id="contact">
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
