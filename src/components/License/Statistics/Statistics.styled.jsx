import styled from "styled-components";
import { colorsMenu, colorsPokemonGrass } from "../../../colors";

export const StatisticsContainer = styled.div`
  position: relative;
  width: 100%;
  border-top: 3px solid ${colorsMenu.borderSeparate};
  padding-top: 15px;
`;
export const StatisticsTitle = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 6px 12px;
  background: #fffaef;
  color: ${colorsMenu.borderSeparate};
  font-weight: 700;
  border-radius: 16px;
  text-transform: uppercase;
`;
export const StatisticsContain = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 15px 0;

  span {
    color: ${colorsPokemonGrass.primaire};
    font-weight: 700;
    font-size: 20px;
  }
  p {
    background: -webkit-linear-gradient(
      105deg,
      ${colorsMenu.btnPrimaire},
      ${colorsMenu.btnSecondary}
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 16px;
    font-weight: 700;
  }
`;
