import React from "react";
import { StatContainer, StatContain, StatTitle } from "./Stats.styled";

const Stats = () => {
  return (
    <StatContainer>
      <StatTitle> Statistiques </StatTitle>

      <StatContain>
        <span> Mes Safari réussi </span>
        <p> Valeur % </p>
      </StatContain>
      <StatContain>
        <span> Safari réussi global </span>
        <p> Valeur % </p>
      </StatContain>
      <StatContain>
        <span> Mes étages Tour réussi </span>
        <p> Valeur % </p>
      </StatContain>
      <StatContain>
        <span> Etages Tour réussi </span>
        <p> Valeur % </p>
      </StatContain>
      <StatContain>
        <span> Mes nouveau Pokemon </span>
        <p> Valeur % </p>
      </StatContain>
    </StatContainer>
  );
};

export default Stats;
