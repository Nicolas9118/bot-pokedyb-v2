import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import BgPrairie from "../../assets/bg_prairie.jpg"
import SpritePokedex from "../../assets/bg_pokedex.jpg"


import Bag from "../../components/Bag/Bag";
import Resources from "../../components/Resources/Resources";
import Profil from "../../components/Profil/Profil";

/* Récupérer les données de mon fichier json */ 
import dataDresseur from '../../DataPlayer.json'

const Pokemon = () => {
    return (
        <div className="pageDresseur">
            <img src={BgPrairie} alt="" className="bgPokemon"/>
            <Profil />
            <Resources />
            <Bag />

            <div className="galleryHallContainer">
                <img src={SpritePokedex} alt="" className="spritePokedex"/>
                <div className="galleryHall">
                    {dataDresseur.map((data) => {
                        return (
                            <NavLink to={`/Dresseur/${data.id}`} className="dresseur"> 
                                <img src={data.cover} alt="" />
                                <p className="nameDresseur"> {data.name} </p>
                            </NavLink>
                            
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Pokemon;