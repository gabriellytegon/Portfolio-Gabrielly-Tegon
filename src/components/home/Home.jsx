import "./style.css";

export function Home() {
  return (
    <div className="home">
      <div className="profileImage">
        <img src="/images/profile.jpeg" alt="" />
      </div>
      <div className="welcome">
        <h1>Meu nome é Gabrielly, muito prazer!</h1>
        <p>
          Bem-vindo (a) ao meu cantinho na internet, onde ideias viram código e
          a criatividade ganha vida.
        </p>
        <div className="socialMediaIcon">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/gabrielly-tegon/"
                target="_blank"
              >
                <img src="/assets/linkedinIcon.svg" alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/gabytegon.tech/"
                target="_blank"
              >
                <img src="/assets/instagramIcon.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="https://github.com/settings/profile" target="_blank">
                <img src="/assets/githubIcon.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
