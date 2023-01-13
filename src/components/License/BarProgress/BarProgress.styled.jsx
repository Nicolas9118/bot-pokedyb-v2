import styled from "styled-components";
import { colorsMenu, colorsPlayers } from "../../../colors";

export const BarProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 65px;
`;
export const LevelProgress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 19%;
  p {
    color: ${colorsPlayers.primaire};
    font-size: 32px;
    font-weight: 700;
    text-shadow: ${colorsMenu.dark} 1px 0 10px;

    &:nth-child(2) {
      font-size: 16px;
      margin-top: -10px;
    }
  }
`;
export const BarProgressContain = styled.div`
  position: relative;
  width: 79%;
  height: 10px;
  background: ${colorsMenu.borderSeparate};
  border-radius: 10px;
`;
export const BarProgressFilling = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ level }) => `${level}%`};
  background: ${colorsPlayers.primaire};
  border-radius: 10px;
  z-index: 1;
`;
