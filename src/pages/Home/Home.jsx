import React from "react";

import "./style.css";
import Header from "../../components/Header/Header";
import CardDresseur from "../../components/CardDresseur/CardDresseur";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import ButtonReward from "../../components/ButtonReward/ButtonReward";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="main">
                <CardDresseur />
                <CardPokemon />
                <ButtonReward name="Récompense Quotidienne" />
                <ButtonReward name="Récompense Hebdomadaire" />
                <ButtonReward name="Récompense Spécial" />
            </div>
        </div>
    )
}

export default Home;