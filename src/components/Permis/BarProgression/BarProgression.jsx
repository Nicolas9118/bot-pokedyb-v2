import React from "react";
import {
  BarProgressionContainer,
  LevelProgression,
  BarProgressionContain,
  BarProgressionFilling,
} from "./BarProgression.styled";

const BarProgression = () => {
  return (
    <BarProgressionContainer>
      <LevelProgression>
        <p> 43 </p>
        <p> Niveau </p>
      </LevelProgression>
      <BarProgressionContain>
        {" "}
        <BarProgressionFilling />{" "}
      </BarProgressionContain>
    </BarProgressionContainer>
  );
};

export default BarProgression;
