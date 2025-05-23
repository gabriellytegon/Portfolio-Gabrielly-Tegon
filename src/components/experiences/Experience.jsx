import "./style.css";
import { ExperienceCard } from "../experienceCard";

export function Experience() {
  return (
    <div className="experiences">
      <h2 className="titleSection">Experiências</h2>
      <ExperienceCard
        className="experienceCard"
        position="Líder do time de desenvolvimento da CDI"
        year="2024"
        description="Liderei a equipe de desenvolvimento da CDI (Comissão Discente de Informática da Unicamp), uma experiência que não apenas aprimorou minhas habilidades técnicas, mas também fortaleceu minhas competências interpessoais, como comunicação, trabalho em equipe e liderança. Durante esse período, aprendi a articular visões, motivar a equipe e tomar decisões estratégicas para superar desafios complexos, garantindo o alinhamento dos projetos e o crescimento coletivo. Essa vivência foi fundamental para meu desenvolvimento profissional, consolidando minha capacidade de liderar com propósito e inovação."
      ></ExperienceCard>
      <ExperienceCard
        className="experienceCard"
        position="Suporte técnico N2"
        year="2024 - atualmente"
        description="Responsável por triar chamados escalonados pelo suporte técnico N1, identificando o problema, passando aos desenvolvedores e acompanhando a sua devolutiva."
      ></ExperienceCard>
    </div>
  );
}
