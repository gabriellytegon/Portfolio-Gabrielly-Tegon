import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";

import { useEffect } from "react";

export function Carousel() {
  useEffect(() => {
    const el = document.querySelector("#carouselExampleCaptions");
    if (el && window.bootstrap) {
      new window.bootstrap.Carousel(el);
    }
  }, []);

  const slides = [
    {
      image: "animaisFantasticos.png",
      link: "https://gabriellytegon.github.io/Site-Origamid/",
    },
    {
      image: "calculadora.jpg",
      link: "https://gabriellytegon.github.io/calculator/",
    },
    {
      image: "devlinks.jpg",
      link: "https://gabriellytegon.github.io/devLinks/",
    },
    {
      image: "habitsTracker.jpg",
      link: "https://gabriellytegon.github.io/habits-tracker/",
    },
  ];

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <h2 className="titleProjects">Projetos</h2>
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={`/images/${slide.image}`}
              className="d-block w-100"
              alt={`Slide ${index + 1}`}
            />
            <div className="carousel-description">
              <button className="buttonProject">
                <a href={slide.link} target="_blank" rel="noopener noreferrer">
                  Clique para ver o projeto
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Próximo</span>
      </button>
    </div>
  );
}
