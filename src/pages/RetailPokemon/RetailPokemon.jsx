import React from "react";
import {
  RetailPokemonPage,
  BgPokemon,
  CardPokemonContainer,
  Number,
  Copy,
  PreviousNext,
} from "./RetailPokemon.styled";

import BgForest from "../../assets/Bg_forest.jpg";
import Pokeball from "../../assets/pokeball.png";

import CardPokemon from "../../components/CardPokemon/CardPokemon";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const DetailPokemon = () => {
  return (
    <RetailPokemonPage>
      <BgPokemon src={BgForest} alt="" />

      <PreviousNext to="/Pokedex" type="prev">
        {" "}
        <FontAwesomeIcon icon={faArrowLeft} />{" "}
      </PreviousNext>

      <CardPokemonContainer>
        <Number> #2 </Number>
        <Copy>
          {" "}
          <img src={Pokeball} alt="" /> 3{" "}
        </Copy>
        <CardPokemon />
      </CardPokemonContainer>

      <PreviousNext to="/Pokedex" type="next">
        {" "}
        <FontAwesomeIcon icon={faArrowRight} />{" "}
      </PreviousNext>
    </RetailPokemonPage>
  );
};

export default DetailPokemon;
