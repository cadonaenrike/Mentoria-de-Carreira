import styled from "styled-components";

export const StyledH1 = styled.h1`
  font-family: "Bangers", cursive;
  color: #fdfdfd;
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem;
  width: 60%;
  z-index: 999;

  h2 {
    color: white;
    font-family: "Bangers", cursive;
    margin: 0;
  }

  p {
    font-size: 23px;
    color: white;
  }
`;
export const StyledImg = styled.img`
  align-self: end;
  width: 46%;
  height: 100%;
  z-index: 1;
`;
export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;
