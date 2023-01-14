import React from "react";
import { useState } from "react";
import {
  AvatarProfile,
  AvatarBarLevel,
  AvatarBarLevelContainer,
  AvatarBarLevelFilling,
  AvatarContainer,
  AvatarInfoContainer,
  AvatarInfo,
  AvatarLevel,
  AvatarName,
  AvatarProfileContainer,
} from "./Avatar.styled";

import License from "../License/License";
import AvatarFace from "../../assets/Poke_Dyb.png";

const Avatar = () => {
  const [currentToggleLicenseTrainer, setCurrentToggleLicenseTrainer] =
    useState(false);
  const handleChangeToggleLicenseTrainer = () => {
    setCurrentToggleLicenseTrainer(!currentToggleLicenseTrainer);
  };
  console.log(currentToggleLicenseTrainer);
  return (
    <>
      <AvatarContainer>
        <AvatarProfileContainer>
          <AvatarProfile onClick={handleChangeToggleLicenseTrainer}>
            <img src={AvatarFace} alt="" />
          </AvatarProfile>
        </AvatarProfileContainer>
        <AvatarInfoContainer>
          <AvatarInfo>
            <AvatarName> Nishi-Senpai </AvatarName>
            <AvatarBarLevelContainer>
              <AvatarLevel> 43 </AvatarLevel>
              <AvatarBarLevel>
                <AvatarBarLevelFilling level="43" />
              </AvatarBarLevel>
            </AvatarBarLevelContainer>
          </AvatarInfo>
        </AvatarInfoContainer>
      </AvatarContainer>

      <License status={currentToggleLicenseTrainer} />
    </>
  );
};

export default Avatar;
