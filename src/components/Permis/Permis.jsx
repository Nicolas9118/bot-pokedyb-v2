import React from "react";
import {
  PermisContainer,
  NamePermis,
  SpritePermis,
  PresentationPermis,
} from "./Permis.syled";

import SpriteDresseurPlayer from "../../assets/dresseur.png";
import BarProgression from "./BarProgression/BarProgression";
import Function from "./Function/Function";
import Stats from "./Stats/Stats";

const Permis = ({ status }) => {
  return (
    <PermisContainer status={status}>
      <PresentationPermis>
        <SpritePermis src={SpriteDresseurPlayer} alt="" />
        <NamePermis> NiShi-Senpai </NamePermis>
      </PresentationPermis>
      <BarProgression />
      <Function />
      <Stats />
    </PermisContainer>
  );
};

export default Permis;
