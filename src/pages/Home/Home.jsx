import React from "react";

import "./style.css";
import ButtonReward from "../../components/ButtonReward/ButtonReward";

import Pokemon1 from "../../assets/dracaufeu.png"
import Pokemon2 from "../../assets/evoli.png"
import Pokemon3 from "../../assets/florizare.png"
import Pokemon4 from "../../assets/pikachu.png"
import Pokemon5 from "../../assets/tortank.png"
import Pokemon6 from "../../assets/dracolosse.png"
import Dresseur from "../../assets/dresseur.png"

const Home = () => {
    return (
        <div className="main">
            <div className="team">
                <div> <img src={Pokemon1} alt="" /> </div>
                <div> <img src={Pokemon2} alt="" /> </div>
                <div> <img src={Pokemon3} alt="" /> </div>
                <div> <img src={Dresseur} alt="" />  </div>
                <div> <img src={Pokemon4} alt="" /></div>
                <div> <img src={Pokemon5} alt="" /> </div>
                <div> <img src={Pokemon6} alt="" /> </div>
            </div>
            <div className="containerButton">
                <ButtonReward name="Récompense Quotidienne" />
                <ButtonReward name="Récompense Hebdomadaire" />
                <ButtonReward name="Récompense Spécial" />
            </div>
        </div>
    )
}

export default Home;