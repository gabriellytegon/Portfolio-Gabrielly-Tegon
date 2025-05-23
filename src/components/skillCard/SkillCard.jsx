import "./style.css";

export function SkillCard(props) {
  return (
    <div className="skillCard">
      <img src={props.icon} alt={props.altText} className="iconSkill" />
    </div>
  );
}
