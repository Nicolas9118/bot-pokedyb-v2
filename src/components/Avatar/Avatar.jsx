import React from "react";
import { useState } from "react";
import {
  AvatarContainer,
  AvatarName,
  AvatarProfil,
  Level,
  LevelBar,
  LevelBarEffect,
  LevelBarFilling,
} from "./Avatar.styled";

import Permis from "../Permis/Permis";
import AvatarFace from "../../assets/Poke_Dyb.png";

const Avatar = () => {
  const [currentToggle, setCurrentToggle] = useState(false);
  const handleChangeToggle = () => {
    setCurrentToggle(!currentToggle);
  };
  console.log(currentToggle);
  return (
    <>
      <AvatarContainer>
        <AvatarProfil onClick={handleChangeToggle}>
          <img src={AvatarFace} alt="" />
        </AvatarProfil>
        <Level> 43 </Level>
        <LevelBar>
          <LevelBarEffect />
          <LevelBarFilling />
        </LevelBar>
        <AvatarName> Nishi-Senpai </AvatarName>
      </AvatarContainer>

      <Permis status={currentToggle} />
    </>
  );
};

export default Avatar;
