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
        <BtnFunction></BtnFunction>
        <InfoFunction> Coming Soon </InfoFunction>
        <p>
          {" "}
          Choisir <br /> Son Dresseur{" "}
        </p>
      </FunctionContain>
      <FunctionContain>
        <BtnFunction></BtnFunction>
        <InfoFunction> Coming Soon </InfoFunction>
        <p>
          {" "}
          Choisir <br /> Son Copain{" "}
        </p>
      </FunctionContain>
      <FunctionContain>
        <BtnFunction></BtnFunction>
        <InfoFunction> Coming Soon </InfoFunction>
        <p>
          {" "}
          Voir <br /> Ses Badges{" "}
        </p>
      </FunctionContain>
    </FunctionContainer>
  );
};

export default Function;
