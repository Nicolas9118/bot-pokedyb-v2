import React from "react";
import { DetailPokemonPage, BgPokemon, CardPokemonContainer, Numero, Exemplaire, PreviewNext  } from "./DetailPokemon.styled";

import BgForest from "../../assets/Bg_forest.jpg"
import Pokeball from "../../assets/pokeball.png"

import CardPokemon from "../../components/CardPokemon/CardPokemon"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const DetailPokemon = () => {
    return (
        <DetailPokemonPage>
            <BgPokemon src={BgForest} alt="" />

            <PreviewNext to="/Pokedex" type="prev"> <FontAwesomeIcon icon={faArrowLeft} /> </PreviewNext>

            <CardPokemonContainer>
                <Numero> #2 </Numero>
                <Exemplaire> <img src={Pokeball} alt=""/> 3 </Exemplaire>
                <CardPokemon />
            </CardPokemonContainer>

            <PreviewNext to="/Pokedex" type="next"> <FontAwesomeIcon icon={faArrowRight} /> </PreviewNext>
        </DetailPokemonPage>
    )
}

export default DetailPokemon;