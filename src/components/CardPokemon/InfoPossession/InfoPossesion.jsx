import React from "react";
import { useParams } from "react-router-dom";
import { BoutonDropContainer, BoutonDropContain, BoutonDrop, SubBoutonDrop } from "./InfoPossession.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

/* Récupérer les données de mon fichier json */ 
import dataPokemon from '../../../DataPokemon.json'

const InfoPossession = () => {
    const { id } = useParams();
    const idData = dataPokemon.find( data => data.id  === id );

    return (
        <BoutonDropContainer>
            <BoutonDropContain>
                <BoutonDrop>
                    <FontAwesomeIcon icon={faChevronDown} />
                    Capturés par 
                    <FontAwesomeIcon icon={faChevronDown} />
                </BoutonDrop>
                <SubBoutonDrop>
                    {idData.possession.map((possession, index) => {
                        return (
                            <div key={index}>
                            <p> {possession} </p>
                            </div>
                        );
                    })}
                </SubBoutonDrop>
            </BoutonDropContain>

            <BoutonDropContain>
                <BoutonDrop>
                    <FontAwesomeIcon icon={faChevronDown} />
                    Recherchés par 
                    <FontAwesomeIcon icon={faChevronDown} />
                </BoutonDrop>
                <SubBoutonDrop>
                    {idData.possession.map((miss, index) => {
                        return (
                            <div key={index}>
                            <p> {miss} </p>
                            </div>
                        );
                    })}
                </SubBoutonDrop>
            </BoutonDropContain>
        </BoutonDropContainer>
    )
}

export default InfoPossession;