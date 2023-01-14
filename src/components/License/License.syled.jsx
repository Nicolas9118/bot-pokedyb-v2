import styled from "styled-components";
import { colorsMenu, colorsPlayers } from "../../colors";

export const LicenseContainer = styled.div`
  position: fixed;
  top: 180px;
  left: 25px;
  bottom: 25px;
  max-width: 500px;
  width: 90%;
  background: linear-gradient(
    ${colorsPlayers.bgPrimaire},
    ${colorsPlayers.bgSecondary}
  );
  border-radius: 32px;
  transform: scale(${({ status }) => (status ? "1" : "0")});
  transition: transform 0.7s ease-in-out;
  transform-origin: top left;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const PresentationLicense = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const NameLicense = styled.div`
  color: ${colorsPlayers.primaire};
  font-size: 32px;
  font-weight: 700;
  text-shadow: ${colorsMenu.dark} 1px 0 10px;
  margin: 60px 0 0 0;
`;
export const SpriteLicense = styled.img`
  filter: drop-shadow(15px 5px 7px ${colorsPlayers.primaire});
  margin: 0 60px 0 0;
  height: 200px;
`;
