import React from "react";
import { useParams } from "react-router-dom";
import { CardPokemon, SpritePokemon, TitleCardPokemon, CostCardPokemonContainer, 
    InfoCostPokemon, SeparateInfoCost, BoutonCraftDez } from "./CardPokemon.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHammer, faRecycle } from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from "@fortawesome/free-brands-svg-icons"

import InfoPossession from "./InfoPossession/InfoPossesion"

/* Récupérer les données de mon fichier json */ 
import dataPokemon from '../../DataPokemon.json'

const CardPokemonContain = () => {
    const { id } = useParams();
    const idData = dataPokemon.find( data => data.id  === id );

    return (
        <CardPokemon>
            <SpritePokemon src={idData.cover} alt=""/>

            <TitleCardPokemon>
                <h2> {idData.name} </h2>
                <div> </div>
            </TitleCardPokemon>

            <BoutonCraftDez type="Craft"> <FontAwesomeIcon icon={faHammer} /> </BoutonCraftDez>

            <BoutonCraftDez type="Dez"> <FontAwesomeIcon icon={faRecycle} /> </BoutonCraftDez>

            <CostCardPokemonContainer>
                <InfoCostPokemon> {idData.rarete} </InfoCostPokemon>
                <SeparateInfoCost />
                <InfoCostPokemon> {idData.type} </InfoCostPokemon>
                <SeparateInfoCost />
                <InfoCostPokemon> {idData.craft} <FontAwesomeIcon icon={faEthereum} /> </InfoCostPokemon>
            </CostCardPokemonContainer>

            <InfoPossession />
        </CardPokemon>
    )
}

export default CardPokemonContain;