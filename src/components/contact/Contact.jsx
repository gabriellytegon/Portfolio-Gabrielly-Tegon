import "./style.css";

export function Contact() {
  return (
    <>
      <div className="contactContainer">
        <div className="contactSection">
          <h2 className="titleContactSection">Contato</h2>
          <div className="contacts">
            <div className="contactItem">
              <a
                href="https://www.linkedin.com/in/gabrielly-tegon/"
                target="_blank"
              >
                <img src="/assets/linkedinIcon.svg" alt="Ícone do LinkedIn" />
                <span>Gabrielly Tegon</span>
              </a>
            </div>
            <div className="contactItem">
              <a
                href="https://www.instagram.com/gabytegon.tech/"
                target="_blank"
              >
                <img src="/assets/instagramIcon.svg" alt="Ícone do Instagram" />
                <span>@tegongaby.tech</span>
              </a>
            </div>
            <div className="contactItem">
              <a href="https://github.com/settings/profile" target="_blank">
                <img src="/assets/githubIcon.svg" alt="Ícone do GitHub" />
                <span>Gabrielly Tegon</span>
              </a>
            </div>
            <div className="contactItem">
              <a href="mailto:tegongabrielly@gmail.com">
                <img src="/assets/gmailIcon.svg" alt="Ícone do Gmail" />
                <span>tegongabrielly@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
