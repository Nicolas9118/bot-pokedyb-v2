import styled from "styled-components";
import { colorsMenu, colorsPlayers, colorsPokemonGrass } from "../../../colors";

export const FunctionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const FunctionContain = styled.div`
  position: relative;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: ${colorsPokemonGrass.primaire};
    font-weight: 500;
    text-align: center;
  }
`;
//  Bulle voué a disparaître quand la feature sera prête
export const InfoFunction = styled.span`
  position: absolute;
  top: 0px;
  left: -50px;
  transform: translateX(-50%);
  padding: 8px 16px;
  border-radius: 10px;
  background: rgba(80, 80, 80, 0.4);
  color: ${colorsPlayers.primaire};
  font-weight: 600;
  font-size: 14px;
  text-shadow: ${colorsMenu.dark} 1px 0 10px;
  transform: scale(0);
  transition: transform 0.5s ease;
`;
export const BtnFunction = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(
    175deg,
    ${colorsMenu.btnPrimaire},
    ${colorsMenu.btnSecondary}
  );
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    ~ span {
      transform: scale(1) rotate(-45deg);
      transition: transform 0.5s ease;
    }
  }
`;
