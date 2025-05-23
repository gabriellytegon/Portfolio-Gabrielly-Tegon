import "./style.css";

export function YearCard(props) {
  return (
    <div className="yearCard" {...props}>
      <p className="year">{props.year}</p>
      <p className="text">{props.text}</p>
    </div>
  );
}
