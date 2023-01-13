import React from "react";
import { useParams } from "react-router-dom";
import {
  BtnDropContainer,
  BtnDropContain,
  BtnDrop,
  SubBtnDrop,
} from "./InfoPossession.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

/* Récupérer les données de mon fichier json */
import dataPokemon from "../../../DataPokemon.json";

const InfoPossession = () => {
  const { id } = useParams();
  const idData = dataPokemon.find((data) => data.id === id);

  return (
    <BtnDropContainer>
      <BtnDropContain>
        <BtnDrop>
          <FontAwesomeIcon icon={faChevronDown} />
          Capturés par
          <FontAwesomeIcon icon={faChevronDown} />
        </BtnDrop>
        <SubBtnDrop>
          {idData.possession.map((possession, index) => {
            return (
              <div key={index}>
                <p> {possession} </p>
              </div>
            );
          })}
        </SubBtnDrop>
      </BtnDropContain>

      <BtnDropContain>
        <BtnDrop>
          <FontAwesomeIcon icon={faChevronDown} />
          Recherchés par
          <FontAwesomeIcon icon={faChevronDown} />
        </BtnDrop>
        <SubBtnDrop>
          {idData.possession.map((miss, index) => {
            return (
              <div key={index}>
                <p> {miss} </p>
              </div>
            );
          })}
        </SubBtnDrop>
      </BtnDropContain>
    </BtnDropContainer>
  );
};

export default InfoPossession;
