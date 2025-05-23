import "./style.css";
import { useState, useRef, useEffect } from "react";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="menu" ref={menuRef}>
      <button
        className="menuToggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Abrir menu"
      >
        <svg
          className="menu-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 7H21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M3 12H21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M3 17H21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>{" "}
      </button>

      <p>DEV</p>

      <ul className={`menu-items ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#home" onClick={() => setIsOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#aboutMe" onClick={() => setIsOpen(false)}>
            Trajetória
          </a>
        </li>
        <li>
          <a href="#carousel" onClick={() => setIsOpen(false)}>
            Projetos
          </a>
        </li>
        <li>
          <a href="#experiences" onClick={() => setIsOpen(false)}>
            Experiências
          </a>
        </li>
        <li>
          <a href="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contato
          </a>
        </li>
      </ul>
    </div>
  );
}
