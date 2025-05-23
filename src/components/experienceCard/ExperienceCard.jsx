import "./style.css";

export function ExperienceCard(props) {
  return (
    <div className="experienceCard">
      <h2 className="position">{props.position}</h2>
      <p className="yearExperience">{props.year}</p>
      <p className="description">{props.description}</p>
    </div>
  );
}
