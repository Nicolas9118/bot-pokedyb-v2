import React from "react";
import { useParams } from "react-router-dom";
import { BadgeContainer, BgDetailPokemon, InfoDresseur } from "./DetailDresseur.styled";

import BgTown from "../../assets/bg_town.jpg"
import Badge1 from "../../assets/badge1.png"
import Badge2 from "../../assets/badge2.png"
import Badge3 from "../../assets/badge3.png"
import Badge4 from "../../assets/badge4.png"
import Badge5 from "../../assets/badge5.png"
import Badge6 from "../../assets/badge6.png"
import Badge7 from "../../assets/badge7.png"

import Profil from "../../components/Profil/Profil";
import Resources from "../../components/Resources/Resources";
import Inventory from "../../components/Inventory/Inventory";
import Gallery from "../../components/Gallery/Gallery"

/* Récupérer les données de mon fichier json */ 
import dataDresseur from '../../DataPlayer.json'

const DetailDresseur = () => {
    const { id } = useParams();
    const idData = dataDresseur.find( data => data.id  === id );

    return (
        <>
            <BgDetailPokemon src={BgTown} alt=""/>
            <Profil />
            <Resources />
            <Inventory />

            <Gallery>
                <InfoDresseur>
                    <span> </span>
                    <div className="pseudoDresseur">
                        <p> Nom : </p>
                        <p> {idData.name} </p>
                    </div>
                    <span> </span>
                    <div className="pokedexDresseur">
                        <p> Pokédex : </p>
                        <p> {idData.number} </p>
                    </div>
                    <span> </span>
                    <div className="moneyDresseur">
                        <p> Or : </p>
                        <p> {idData.gold} </p>
                    </div>
                    <span> </span>
                    <div className="dustDresseur">
                        <p> Poussière : </p>
                        <p> {idData.dust} </p>
                    </div>
                    <span> </span>
                </InfoDresseur>

                <BadgeContainer>
                    <div> <img src={Badge1} alt="" /> </div>
                    <div> <img src={Badge2} alt="" /> </div>
                    <div> <img src={Badge3} alt="" /> </div>
                    <div> <img src={Badge4} alt="" /> </div>
                    <div> <img src={Badge5} alt="" /> </div>
                    <div> <img src={Badge6} alt="" /> </div>
                    <div> <img src={Badge7} alt="" /> </div>
                </BadgeContainer>
            </Gallery>
            
        </>
    )
}

export default DetailDresseur;