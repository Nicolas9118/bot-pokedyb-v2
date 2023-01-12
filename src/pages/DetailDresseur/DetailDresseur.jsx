import React from "react";
import { BgDresseur } from "./DetailDresseur.styled";

import BgDresseurPage from "../../assets/Bg_forest.jpg";

const DetailDresseur = () => {
  return (
    <div>
      <BgDresseur src={BgDresseurPage} alt="" />
    </div>
  );
};

export default DetailDresseur;
