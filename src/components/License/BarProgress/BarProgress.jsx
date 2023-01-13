import React from "react";
import {
  BarProgressContainer,
  LevelProgress,
  BarProgressContain,
  BarProgressFilling,
} from "./BarProgress.styled";

const BarProgression = () => {
  return (
    <BarProgressContainer>
      <LevelProgress>
        <p> 43 </p>
        <p> Niveau </p>
      </LevelProgress>
      <BarProgressContain>
        <BarProgressFilling level="43" />
      </BarProgressContain>
    </BarProgressContainer>
  );
};

export default BarProgression;
