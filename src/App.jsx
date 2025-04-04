import "./App.css";
import { Menu } from "./components/menu";
import { Home } from "./components/home";
import { AboutMe } from "./components/aboutMe";
import { Experience } from "./components/experiences";
import { Skills } from "./components/skills";
import { Contact } from "./components/contact";
import { Carousel } from "./components/carousel/Carousel";

function App() {
  return (
    <div className="page">
      <Menu></Menu>
      <div id="home">
        <Home></Home>
      </div>
      <div id="aboutMe">
        <AboutMe></AboutMe>
      </div>
      <div id="carousel">
        <Carousel></Carousel>
      </div>
      <div id="experiences">
        <Experience></Experience>
      </div>
      <div id="skills">
        <Skills></Skills>
      </div>
      <div id="contact">
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
