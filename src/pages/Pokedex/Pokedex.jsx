import React from "react";
import { BgPokedex, SpritePokedex, LinkPokemon, SpritePokeball, SpritePokemon } from "./Pokedex.styled";


import BgPrairie from "../../assets/bg_prairie.jpg"
import DessinPokedex from "../../assets/bg_pokedex.jpg"
import Pokeball from "../../assets/pokeball.png"

import Profil from "../../components/Profil/Profil";
import Resources from "../../components/Resources/Resources";
import Inventory from "../../components/Inventory/Inventory";
import Gallery from "../../components/Gallery/Gallery"

/* Récupérer les données de mon fichier json */ 
import dataPokemon from '../../DataPokemon.json'

const Pokedex = () => {
    return (
        <div className="pokedex">
            <BgPokedex src={BgPrairie} alt=""/>
            <Profil />
            <Resources />
            <Inventory />

            <Gallery>
            <SpritePokedex src={DessinPokedex} alt=""/>
                {dataPokemon.map((data) => {
                    return (
                        <LinkPokemon to={`/Pokemon/${data.id}`}> 
                            <SpritePokeball src={Pokeball} alt=""/>
                            <SpritePokemon src={data.cover} alt="" />
                        </LinkPokemon>
                        
                    );
                })}
            </Gallery>
            
        </div>
    )
}

export default Pokedex;