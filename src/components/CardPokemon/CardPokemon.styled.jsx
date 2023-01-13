import styled from "styled-components";
import {
  colorsMenu,
  colorsPokemonFire,
  colorsPokemonGrass,
} from "../../colors";

export const CardPokemon = styled.div`
  z-index: 9;
  position: absolute;
  top: 100px;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  background: ${colorsMenu.light};
  border-radius: 32px;
  box-shadow: 2px 2px 10px ${colorsMenu.light};
`;
export const SpritePokemon = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  max-width: 224px;
  max-height: 224px;
`;
export const TitleCardPokemon = styled.div`
  margin: 120px 0 0 0;
  width: 100%;

  h2 {
    color: ${colorsPokemonGrass.primaire};
    font-size: 32px;
    width: 70%;
    text-align: center;
    margin: 0 auto;
  }
  div {
    width: 70%;
    max-width: 280px;
    margin: 10px auto;
    height: 15px;
    background: linear-gradient(
      to right,
      ${colorsPokemonGrass.bgPrimaireOpaque},
      ${colorsPokemonGrass.bgSecondaryOpaque}
    );
  }
`;
export const CostCardPokemonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin: auto;
  height: 100px;
  font-size: 28px;
  color: ${colorsPokemonGrass.primaire};
  border-bottom: 3px solid ${colorsMenu.borderSeparate};
`;
export const InfoCostPokemon = styled.div`
  width: 20%;
  text-align: center;
`;
export const SeparateInfoCost = styled.div`
  height: 25px;
  width: 3px;
  background: ${colorsMenu.borderSeparate};
`;
export const BtnCraftDezContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 50px 0;
`;
export const BtnCraftDez = styled.div`
  position: absolute;
  top: 125px;
  ${({ type }) => (type === "Craft" ? "left: 25px" : "right: 25px")};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${({ type }) =>
    type === "Craft"
      ? `linear-gradient(${colorsPokemonGrass.bgPrimaireOpaque}, ${colorsPokemonGrass.bgSecondaryOpaque})`
      : `linear-gradient(${colorsPokemonFire.bgPrimaireOpaque}, ${colorsPokemonFire.bgSecondaryOpaque})`};
  box-shadow: ${({ type }) =>
    type === "Craft"
      ? `2px 2px 10px ${colorsPokemonGrass.bgPrimaireOpaque}, -2px -2px 10px ${colorsPokemonGrass.bgSecondaryOpaque}`
      : `2px 2px 10px ${colorsPokemonFire.bgPrimaireOpaque}, -2px -2px 10px ${colorsPokemonFire.bgSecondaryOpaque}`};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
