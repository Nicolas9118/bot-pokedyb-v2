import React from "react";
import { ResourcesContain, ResourcesContainer } from "./Resources.styled";

import Gold from "../../assets/optimized-pokedollar.svg";
import Dust from "../../assets/optimized-dust.svg";

const Resources = () => {
  return (
    <ResourcesContainer>
      <ResourcesContain>
        <img src={Gold} alt="" /> <p> 1500 </p>{" "}
      </ResourcesContain>
      <ResourcesContain>
        <img src={Dust} alt="" /> <p> 1328 </p>{" "}
      </ResourcesContain>
      <ResourcesContain>
        <img src={Gold} alt="" /> <p> 28 </p>{" "}
      </ResourcesContain>
      <ResourcesContain>
        <img src={Gold} alt="" /> <p> 14 </p>{" "}
      </ResourcesContain>
    </ResourcesContainer>
  );
};

export default Resources;
