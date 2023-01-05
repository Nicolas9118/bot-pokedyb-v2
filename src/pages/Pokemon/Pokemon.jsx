import React from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import SpritePokedex from "../../assets/bg_pokedex.jpg"
import BgPrairie from "../../assets/bg_prairie.jpg"

import Bag from "../../components/Bag/Bag";
import Resources from "../../components/Resources/Resources";
import Profil from "../../components/Profil/Profil";

/* Récupérer les données de mon fichier json */ 
import dataPokemon from '../../DataPokemon.json'

const Pokemon = () => {
    const { id } = useParams();
    const idData = dataPokemon.find( data => data.id  === id );
    
    return (
        <div className="pagePokemon">
            <Profil />
            <Resources />
            <Bag />
            <img src={BgPrairie} alt="" className="bgPokemon"/>

            <div className="pagePokemonPokedex">
                <img src={SpritePokedex} alt="" className="bgPagePokemon"/>

                <div className="infoContainer">
                    <div className="infoPokemon">
                        <div className="description">
                            <p> Pokedex N° {idData.number} </p>
                            <h3> {idData.name} </h3>
                            <p> {idData.type} </p>
                        </div>
                        <div className="cost">
                            <div className="chance">
                                <h4> Rareté : </h4>
                                <p> {idData.rarete} </p>
                            </div>
                            <div className="craft">
                                <h4> Craft : </h4>
                                <p> {idData.craft} </p>
                            </div>
                        </div>
                    </div>

                    <div className="infoDresseur">
                        <div className="possession">
                            <h4> Possédé par : </h4>
                            <p> {idData.possession} </p>
                        </div>
                        <div className="miss">
                            <h4> Recherché par : </h4>
                            <p> {idData.manque} </p>
                        </div>
                    </div>
                </div>
                <img src={idData.cover} alt="" className="spritePokemon"/>
            </div>
        </div>
    )
}

export default Pokemon;