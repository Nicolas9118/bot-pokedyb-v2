import React from "react";
import { BgHome } from "./Home.styled";

import BgForest from "../../assets/Bg_forest.jpg";
import Avatar from "../../components/Avatar/Avatar";
import Menu from "../../components/Menu/Menu";

const Home = () => {
  return (
    <div>
      <BgHome src={BgForest} alt="" />
      <Avatar />
      <Menu />
    </div>
  );
};

export default Home;
