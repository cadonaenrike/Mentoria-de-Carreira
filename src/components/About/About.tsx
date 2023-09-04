import { person } from "../../data/Person";
import { StyledDiv, StyledH1, StyledImg, StyledInfo } from "./AboutStyled";

interface AboutProps {
  personagem: string;
}

const About: React.FC<AboutProps> = ({ personagem }) => {
  const personagemSelecionado = person.find(
    (person) => person.nome === personagem
  );

  return (
    <>
      {personagemSelecionado && (
        <StyledDiv>
          <StyledInfo>
            <StyledH1>{personagemSelecionado.nome}</StyledH1>
            <p>{personagemSelecionado.descricao}</p>
            <h2>Qualidades:</h2>
            <p>{personagemSelecionado.softSkills}</p>
          </StyledInfo>
          <StyledImg
            src={personagemSelecionado.img}
            alt={personagemSelecionado.nome}
          ></StyledImg>
        </StyledDiv>
      )}
    </>
  );
};

export default About;
