import styled from "styled-components";
import { Link } from "react-router-dom";
import { colorsMenu } from "../../colors";

export const BgPokedex = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;
export const PokedexContainer = styled.div`
  position: fixed;
  top: 200px;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%);
  width: 65%;
  background: linear-gradient(
    ${colorsMenu.bgSecondary},
    ${colorsMenu.bgPrimaire}
  );
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
export const HeaderPokedexContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 175px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 5px solid ${colorsMenu.light};
`;
export const TitlePokedex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colorsMenu.bgPrimaire};
  text-shadow: 2px 2px 3px ${colorsMenu.light};
  margin: 15px 0;
`;
export const BodyPokedexContainer = styled.div`
  position: absolute;
  top: 195px;
  left: 0;
  bottom: 0;
  overflow: auto;
  width: 98%;
  margin: auto;

  &::-webkit-scrollbar {
    width: 5px;
    background: ${colorsMenu.light};
    border-radius: 35px;
  }

  &::-webkit-scrollbar-thumb {
    width: 300%;
    background: ${colorsMenu.borderSeparate};
    border-radius: 35px;
  }
`;
export const FakeBodyPokedexContainer = styled.div`
  position: relative;
  margin: 10px;
`;
export const Region = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  grid-gap: 15px;
  flex-wrap: wrap;
  margin: 30px auto;
  padding-top: 30px;
  border-top: 5px solid ${colorsMenu.bgPrimaire};
`;
export const TitleRegion = styled.div`
  width: 100px;
  height: 24px;
  position: absolute;
  top: 0;
  left: -1%;
  transform: translateY(-50%);
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background: ${colorsMenu.bgPrimaire};
  color: ${colorsMenu.light};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Card = styled(Link)`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 16px;
  background: ${colorsMenu.card};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colorsMenu.light};
  font-size: 32px;
  font-weight: 300;
`;
export const SpritePokemon = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  height: 100px;
  width: 100px;
`;
