import "./style.css";

export function Menu() {
  return (
    <div className="menu">
      <p>DEV</p>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#aboutMe">Trajetória</a>
        </li>
        <li>
          <a href="#carousel">Projetos</a>
        </li>
        <li>
          <a href="#experiences">Experiências</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </div>
  );
}
