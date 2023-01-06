import React from "react";
import { BgHome, ButtonContainer, Team } from "./Home.styled";

import BgPrairie from "../../assets/bg_prairie.jpg"
import Pokemon1 from "../../assets/dracaufeu.png"
import Pokemon2 from "../../assets/evoli.png"
import Pokemon3 from "../../assets/florizare.png"
import Pokemon4 from "../../assets/pikachu.png"
import Pokemon5 from "../../assets/tortank.png"
import Pokemon6 from "../../assets/dracolosse.png"
import Dresseur from "../../assets/dresseur.png"

import Profil from "../../components/Profil/Profil"
import Resources from "../../components/Resources/Resources"
import Inventory from "../../components/Inventory/Inventory"
import Button from "../../components/Button/Button";


const Home = () => {
    return (
        <div className="home">
            <BgHome src={BgPrairie} alt="" className="bgHome"/>
            <Profil />
            <Resources />
            <Inventory />

            <Team>
                <div> <img src={Pokemon1} alt="" /> </div>
                <div> <img src={Pokemon2} alt="" /> </div>
                <div> <img src={Pokemon3} alt="" /> </div>
                <div> <img src={Dresseur} alt="" />  </div>
                <div> <img src={Pokemon4} alt="" /></div>
                <div> <img src={Pokemon5} alt="" /> </div>
                <div> <img src={Pokemon6} alt="" /> </div>
            </Team>

            <ButtonContainer>
                <Button name="Claim" type="Reward"/>
                <Button name="Journa" type="Reward"/>
                <Button name="Bonus" type="Reward"/>
            </ButtonContainer>
        </div>
    )
}

export default Home;