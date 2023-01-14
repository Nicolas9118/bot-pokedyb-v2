import styled from "styled-components";
import { colorsMenu, colorsPlayers } from "../../colors";

export const AvatarContainer = styled.div`
  position: fixed;
  top: 25px;
  left: 25px;
  display: flex;
`;
export const AvatarProfileContainer = styled.div`
  position: relative;
  width: 130px;
  height: 130px;
  transform-style: preserve-3d;
  perspective: 1000px;
  z-index: 2;
`;
export const AvatarProfile = styled.div`
  width: 130px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to right top,
    ${colorsMenu.bgPrimaire},
    ${colorsMenu.bgSecondary}
  );

  border-top: 3px solid ${colorsPlayers.bgSecondary};
  border-right: 3px solid ${colorsPlayers.bgSecondary};
  border-bottom: 5px solid ${colorsPlayers.bgPrimaire};
  border-left: 5px solid ${colorsPlayers.bgPrimaire};
  border-radius: 25px;

  transform-origin: center;
  transform: perspective(800px) rotateY(20deg);
  transition: all 0.4s ease;

  img {
    object-fit: cover;
    width: 90%;
    height: 90%;
  }
  &:hover {
    border: 5px solid ${colorsPlayers.bgPrimaire};
    transform: perspective(800px) rotateY(0deg);
    transition: transform 0.4s ease;
  }
`;
export const AvatarInfoContainer = styled.div`
  position: relative;
  width: 300px;
  height: 130px;
  transform-style: preserve-3d;
  perspective: 1000px;
`;
export const AvatarInfo = styled.div`
  width: 300px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 15px;
  background: linear-gradient(
    to left top,
    ${colorsMenu.bgPrimaire},
    ${colorsMenu.bgSecondary}
  );

  border-top: 3px solid ${colorsPlayers.bgPrimaire};
  border-right: 3px solid ${colorsPlayers.bgPrimaire};
  border-bottom: 5px solid ${colorsPlayers.bgSecondary};
  border-left: 5px solid ${colorsPlayers.bgSecondary};
  border-radius: 25px;

  transform-origin: center;
  transform: perspective(1000px) rotateY(-20deg);
  transition: all 0.4s ease;
  margin-left: -40px;

  &:hover {
    border: 5px solid ${colorsPlayers.bgPrimaire};
    margin-left: 0px;
    transform: perspective(1000px) rotateY(0deg);
    transition: all 0.4s ease;
  }
`;
export const AvatarName = styled.div`
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${colorsMenu.bgPrimaire};
  font-size: 20px;
  font-weight: 700;
  text-shadow: 2px 2px 3px ${colorsMenu.light};
  padding-left: 15px;
`;
export const AvatarBarLevelContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
`;
export const AvatarLevel = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(
    50% 0%,
    70% 10%,
    85% 25%,
    100% 35%,
    85% 75%,
    50% 100%,
    15% 75%,
    0 35%,
    15% 25%,
    30% 10%
  );
  background: ${colorsMenu.card};
  border-radius: 35px;
  color: ${colorsMenu.bgPrimaire};
  font-size: 28px;
  font-weight: 700;
  z-index: 3;
`;
export const AvatarBarLevel = styled.div`
  position: relative;
  width: 150px;
  height: 15px;
  background: ${colorsMenu.card};
  border-radius: 5px;
  transform: skew(-35deg);
  margin-left: -6px;
`;
export const AvatarBarLevelFilling = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ level }) => `${level}%`};
  background: ${colorsPlayers.primaire};
  border-radius: 5px;
  z-index: 1;
`;
