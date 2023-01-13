import React from "react";
import {
  FunctionContainer,
  FunctionContain,
  BtnFunction,
  InfoFunction,
} from "./Function.styled";

const Function = () => {
  return (
    <FunctionContainer>
      <FunctionContain>
        <BtnFunction> Soon </BtnFunction>
        <InfoFunction> Coming Soon </InfoFunction>
        <p> Choisir son Dresseur </p>
      </FunctionContain>
      <FunctionContain>
        <BtnFunction> Soon </BtnFunction>
        <InfoFunction> Coming Soon </InfoFunction>
        <p> Choisir son Copain </p>
      </FunctionContain>
      <FunctionContain>
        <BtnFunction> Soon </BtnFunction>
        <InfoFunction> Coming Soon </InfoFunction>
        <p> Voir ses Badges </p>
      </FunctionContain>
    </FunctionContainer>
  );
};

export default Function;
