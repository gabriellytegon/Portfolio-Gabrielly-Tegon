import "./style.css";
import { SkillCard } from "../skillCard";

export function Skills() {
  const skills = [
    { icon: "/assets/reactIcon.svg", altText: "ícone do ReactJS" },
    { icon: "/assets/javascriptIcon.svg", altText: "ícone do JavaScript" },
    { icon: "/assets/htmlIcon.svg", altText: "ícone do HTML" },
    { icon: "/assets/cssIcon.svg", altText: "ícone do CSS" },
    { icon: "/assets/cIcon.svg", altText: "ícone do C" },
    { icon: "/assets/figmaIcon.svg", altText: "ícone do Figma" },
    { icon: "/assets/gitIcon.svg", altText: "ícone do GIT" },
  ];

  return (
    <div className="skillsContainer">
      <div className="skillsSection">
        <h2 className="titleSection">Hard Skills</h2>
        <div className="skills">
          {skills.map((skill, index) => (
            <SkillCard key={index} icon={skill.icon} altText={skill.altText} />
          ))}
        </div>
      </div>
    </div>
  );
}
