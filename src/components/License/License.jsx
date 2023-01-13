import React from "react";
import {
  LicenseContainer,
  NameLicense,
  SpriteLicense,
  PresentationLicense,
} from "./License.syled";

import SpriteDresseurPlayer from "../../assets/dresseur.png";
import BarProgress from "./BarProgress/BarProgress";
import Function from "./Function/Function";
import Stats from "./Statistics/Statistics";

const License = ({ status }) => {
  return (
    <LicenseContainer status={status}>
      <PresentationLicense>
        <SpriteLicense src={SpriteDresseurPlayer} alt="" />
        <NameLicense> NiShi-Senpai </NameLicense>
      </PresentationLicense>
      <BarProgress />
      <Function />
      <Stats />
    </LicenseContainer>
  );
};

export default License;
