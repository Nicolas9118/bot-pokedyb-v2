import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

import SpritePokedex from "../../assets/bg_pokedex.jpg"
import BgPrairie from "../../assets/bg_prairie.jpg"
import Pokeball from "../../assets/pokeball.png"

import Bag from "../../components/Bag/Bag";
import Resources from "../../components/Resources/Resources";
import Profil from "../../components/Profil/Profil";

/* Récupérer les données de mon fichier json */ 
import dataPokemon from '../../DataPokemon.json'

const Pokedex = () => {
    return (
        <div className="pokedex">
            <img src={BgPrairie} alt="" className="bgPokemon"/>
            <Profil />
            <Resources />
            <Bag />
            <div className="galleryPokedex">
                <img src={SpritePokedex} alt="" className="spritePokedex"/>
                {dataPokemon.map((data) => {
                    return (
                        <NavLink to={`/Pokemon/${data.id}`} className="pokemon"> 
                            <img src={Pokeball} alt="" className="pokeball"/>
                            <img src={data.cover} alt="" />
                        </NavLink>
                        
                    );
                })}
            </div>
        </div>
    )
}

export default Pokedex;