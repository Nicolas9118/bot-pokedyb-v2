import React from "react";
import { BgHome } from "./Home.styled";

import BgForest from "../../assets/Bg_forest.jpg";
import Avatar from "../../components/Avatar/Avatar";
import Resources from "../../components/Resources/Resources";
// import Menu from "../../components/Menu/Menu";

const Home = () => {
  return (
    <div>
      <BgHome src={BgForest} alt="" />
      <Avatar />
      <Resources />
    </div>
  );
};

export default Home;
