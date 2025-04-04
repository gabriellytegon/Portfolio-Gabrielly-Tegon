import "./style.css";
import { SkillCard } from "../skillCard";

export function Skills() {
  return (
    <>
      <div className="skillsContainer">
        <div className="skillsSection">
          <h2 className="titleSectionSkills">Hard Skills</h2>
          <div className="skills">
            <SkillCard
              icon="../../../public/assets/reactIcon.svg"
              altText="ícone do ReactJS"
            ></SkillCard>
            <SkillCard
              icon="../../../public/assets/javascriptIcon.svg"
              altText="ícone do JavaScript"
            ></SkillCard>
            <SkillCard
              icon="../../../public/assets/htmlIcon.svg"
              altText="ícone do HTML"
            ></SkillCard>
            <SkillCard
              icon="../../../public/assets/cssIcon.svg"
              altText="ícone do CSS"
            ></SkillCard>
            <SkillCard
              icon="../../../public/assets/cIcon.svg"
              altText="ícone do C"
            ></SkillCard>
            <SkillCard
              icon="../../../public/assets/figmaIcon.svg"
              altText="ícone do Figma"
            ></SkillCard>
            <SkillCard
              icon="../../../public/assets/gitIcon.svg"
              altText="ícone do GIT"
            ></SkillCard>
          </div>
        </div>
      </div>
    </>
  );
}
