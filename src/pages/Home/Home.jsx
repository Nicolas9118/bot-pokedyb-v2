import React from "react";
import { BgHome } from "./Home.styled";

import BgForest from "../../assets/Bg_forest.jpg"
import Avatar from "../../components/Avatar/Avatar";
// import Pokemon1 from "../../assets/dracaufeu.png"
// import Pokemon2 from "../../assets/evoli.png"
// import Pokemon3 from "../../assets/florizare.png"
// import Pokemon4 from "../../assets/pikachu.png"
// import Pokemon5 from "../../assets/tortank.png"
// import Pokemon6 from "../../assets/dracolosse.png"
// import Dresseur from "../../assets/dresseur.png"

// import InfoDresseur from "../../components/InfoDresseur/InfoDresseur";
// import Resources from "../../components/Resources/Resources";
// import InfoPokemon from "../../components/InfoPokemon/InfoPokemon"
// import Action from "../../components/Action/Action";
// import Rewards from "../../components/Rewards/Rewards";

const Home = () => {
    return (
        <div>
            <BgHome src={BgForest} alt="" />
            <Avatar />
            {/* <InfoDresseur />
            <Resources />
            <InfoPokemon />
            <Action />
            <Rewards /> */}
        </div>
    )
}

export default Home;