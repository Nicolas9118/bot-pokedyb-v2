import React from "react";
import { LinkDresseur, SpriteDresseur, NameDresseur, BgHallOfFame  } from "./HallOfFame.styled";


import BgPrairie from "../../assets/bg_prairie.jpg"

import Profil from "../../components/Profil/Profil";
import Resources from "../../components/Resources/Resources";
import Inventory from "../../components/Inventory/Inventory";
import Gallery from "../../components/Gallery/Gallery"

/* Récupérer les données de mon fichier json */ 
import dataDresseur from '../../DataPlayer.json'

const HallOfFame = () => {
    return (
        <>
            <BgHallOfFame src={BgPrairie} alt=""/>
            <Profil />
            <Resources />
            <Inventory />

            <Gallery>
                {dataDresseur.map((data) => {
                    return (
                        <LinkDresseur to={`/Dresseur/${data.id}`} className="dresseur"> 
                            <SpriteDresseur src={data.cover} alt="" />
                            <NameDresseur p className="nameDresseur"> {data.name} </NameDresseur>
                        </LinkDresseur>
                            
                    ); 
                })}
            </Gallery>
            
        </>
    )
}

export default HallOfFame;