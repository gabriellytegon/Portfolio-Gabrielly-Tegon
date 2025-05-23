import "./style.css";
import { YearCard } from "../yearCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="aboutMe">
      <h2 className="titleSection">Minha trajetória</h2>
      <YearCard
        data-aos="fade-right"
        className="yearCard"
        year="2019"
        text="Minha história com a tecnologia não começou desde cedo, e muito menos foi minha profissão dos sonhos desde sempre. Em 2019, fiz um curso técnico em Administração e, para ser sincera? Eu amava! Me imaginava construindo minha carreira nessa área, mergulhando no universo da contabilidade e gestão. No entanto, no final do ensino médio, em 2021, tudo mudou. A tecnologia estava em alta, comecei a explorar alguns cursos e, para minha surpresa, a menina que sonhava com contabilidade se encantou pelo mundo da programação."
      ></YearCard>
      <YearCard
        data-aos="fade-right"
        className="yearCard"
        year="2022"
        text="Em 2022, ingressei no curso de Análise e Desenvolvimento de Sistemas na Unicamp, e foi nesse momento que minha paixão pela área só cresceu. Vivi experiências incríveis, superei diversos desafios e mergulhei de vez no universo da tecnologia. A cada projeto e aprendizado, eu tinha ainda mais certeza de que estava no caminho certo."
      ></YearCard>
      <YearCard
        data-aos="fade-right"
        className="yearCard"
        year="2023"
        text="Em 2023, tive a oportunidade de participar de uma maratona de programação da Unicamp, um desafio que me colocou à prova e me mostrou o quanto eu havia evoluído. A experiência foi intensa, repleta de aprendizado e colaboração. Foi ali que percebi, mais do que nunca, que a presença feminina na tecnologia é fundamental e que, apesar dos obstáculos, somos capazes de ir muito além do que dizem."
      ></YearCard>
      <YearCard
        data-aos="fade-right"
        className="yearCard"
        year="2024"
        text="Já em 2024, assumi a liderança da equipe de desenvolvimento da CDI (Comissão Discente de Informática da Unicamp), um papel que me permitiu não apenas crescer tecnicamente, mas também desenvolver habilidades de liderança e trabalho em equipe. Essa experiência reforçou minha certeza de que quero continuar contribuindo para a tecnologia e inspirando outras mulheres a se desafiarem e ocuparem seus espaços nesse universo."
      ></YearCard>
    </div>
  );
}
