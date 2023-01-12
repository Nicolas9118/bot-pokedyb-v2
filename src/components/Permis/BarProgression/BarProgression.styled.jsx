import styled from "styled-components";

export const BarProgressionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 65px;
`;

export const LevelProgression = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 19%;
  p {
    color: #f8c83a;
    font-size: 32px;
    font-weight: 700;
    text-shadow: #000 1px 0 10px;

    &:nth-child(2) {
      font-size: 16px;
      margin-top: -10px;
    }
  }
`;
export const BarProgressionContain = styled.div`
  position: relative;
  width: 79%;
  height: 10px;
  background: #e4e4e4;
  border-radius: 10px;
`;
// Comment faire en sorte que la "width" LevelBarFilling change selon la variable  (remplisage de la LevelBar selon le niveau du joueur) ?
export const BarProgressionFilling = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  /* width: ${({ level }) => {}}; */
  width: 50%;
  background: #f8c83a;
  border-radius: 10px;
  z-index: 1;
`;
