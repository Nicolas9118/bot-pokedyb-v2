import styled from "styled-components";
import { colorsPokemonGrass } from "../../../colors";

export const BtnDropContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  margin: 20px 0;
`;
export const BtnDropContain = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 10px auto;
`;
export const BtnDrop = styled.div`
  width: 100%;
  height: 50px;
  background: linear-gradient(
    ${colorsPokemonGrass.bgPrimaire},
    ${colorsPokemonGrass.bgSecondary}
  );
  box-shadow: 2px 2px 10px ${colorsPokemonGrass.bgPrimaireOpaque};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: ${colorsPokemonGrass.primaire};
  font-weight: 700;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin: 0 20px;
  }
`;
export const SubBtnDrop = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 115px;
  padding: 10px 0;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background: linear-gradient(
    ${colorsPokemonGrass.bgSecondary},
    ${colorsPokemonGrass.bgPrimaire}
  );
  color: ${colorsPokemonGrass.primaire};
  font-weight: 600;
  font-size: 14px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
  }
`;
