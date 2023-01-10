import React from "react";
import { BgHome } from "./Home.styled";

import BgForest from "../../assets/Bg_forest.jpg"
import Avatar from "../../components/Avatar/Avatar";

const Home = () => {
    return (
        <div>
            <BgHome src={BgForest} alt="" />
            <Avatar />
        </div>
    )
}

export default Home;