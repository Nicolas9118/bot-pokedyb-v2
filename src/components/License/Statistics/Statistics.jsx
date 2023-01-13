import React from "react";
import {
  StatisticsContainer,
  StatisticsContain,
  StatisticsTitle,
} from "./Statistics.styled";

const Stats = () => {
  return (
    <StatisticsContainer>
      <StatisticsTitle> Statistiques </StatisticsTitle>

      <StatisticsContain>
        <span> Mes Safari réussi </span>
        <p> Valeur % </p>
      </StatisticsContain>
      <StatisticsContain>
        <span> Safari réussi global </span>
        <p> Valeur % </p>
      </StatisticsContain>
      <StatisticsContain>
        <span> Mes étages Tour réussi </span>
        <p> Valeur % </p>
      </StatisticsContain>
      <StatisticsContain>
        <span> Etages Tour réussi </span>
        <p> Valeur % </p>
      </StatisticsContain>
      <StatisticsContain>
        <span> Mes nouveau Pokemon </span>
        <p> Valeur % </p>
      </StatisticsContain>
    </StatisticsContainer>
  );
};

export default Stats;
