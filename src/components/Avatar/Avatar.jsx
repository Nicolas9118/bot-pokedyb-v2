import React from "react";
import { useState } from "react";
import {
  AvatarContainer,
  AvatarName,
  AvatarProfile,
  Level,
  LevelBar,
  LevelBarEffect,
  LevelBarFilling,
} from "./Avatar.styled";

import License from "../License/License";
import AvatarFace from "../../assets/Poke_Dyb.png";

const Avatar = () => {
  const [currentToggleLicenseTrainer, setCurrentToggleLicenseTrainer] =
    useState(false);
  const handleChangeToggleLicenseTrainer = () => {
    setCurrentToggleLicenseTrainer(!currentToggleLicenseTrainer);
  };
  return (
    <>
      <AvatarContainer>
        <AvatarProfile onClick={handleChangeToggleLicenseTrainer}>
          <img src={AvatarFace} alt="" />
        </AvatarProfile>
        <Level> 43 </Level>
        <LevelBar>
          <LevelBarEffect />
          <LevelBarFilling level="43" />
        </LevelBar>
        <AvatarName> Nishi-Senpai </AvatarName>
      </AvatarContainer>

      <License status={currentToggleLicenseTrainer} />
    </>
  );
};

export default Avatar;
