import styled from "styled-components";
import { Link } from "react-router-dom";
import { colorsMenu, colorsPokemonGrass } from "../../colors";

export const RetailPokemonPage = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const BgPokemon = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;
export const PreviousNext = styled(Link)`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: linear-gradient(
    ${colorsPokemonGrass.bgPrimaireOpaque},
    ${colorsPokemonGrass.bgSecondaryOpaque}
  );
  color: #fff;
  font-size: 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #fff;
    box-shadow: 2px 2px 10px ${colorsPokemonGrass.bgPrimaireOpaque},
      -2px -2px 10px ${colorsPokemonGrass.bgPrimaireOpaque};
    color: ${colorsPokemonGrass.bgPrimaireOpaque};
  }
`;
export const CardPokemonContainer = styled.div`
  position: relative;
  max-width: 600px;
  width: 90%;
  height: calc(100vh - 100px);
  background: linear-gradient(
    ${colorsPokemonGrass.bgPrimaire},
    ${colorsPokemonGrass.bgSecondary}
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 32px;
`;
export const Number = styled.div`
  position: absolute;
  top: 25px;
  left: 25px;
  color: ${colorsPokemonGrass.primaire};
  font-size: 36px;
  font-weight: 700;
  text-shadow: 2px 2px 3px ${colorsMenu.light};
`;
export const Copy = styled.span`
  position: absolute;
  top: 25px;
  right: 25px;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colorsPokemonGrass.primaire};
  font-weight: 700;
  text-shadow: 2px 2px 3px ${colorsMenu.light};

  img {
    width: 24px;
    height: 24px;
    margin-right: 5px;
  }
`;
