import React from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import BgTown from "../../assets/bg_town.jpg"
import Badge1 from "../../assets/badge1.png"
import Badge2 from "../../assets/badge2.png"
import Badge3 from "../../assets/badge3.png"
import Badge4 from "../../assets/badge4.png"
import Badge5 from "../../assets/badge5.png"
import Badge6 from "../../assets/badge6.png"
import Badge7 from "../../assets/badge7.png"


import Bag from "../../components/Bag/Bag";
import Resources from "../../components/Resources/Resources";
import Profil from "../../components/Profil/Profil";

/* Récupérer les données de mon fichier json */ 
import dataDresseur from '../../DataPlayer.json'

const Dresseur = () => {
    const { id } = useParams();
    const idData = dataDresseur.find( data => data.id  === id );
    console.log(idData);

    return (
        <div className="pageDresseur">
            <img src={BgTown} alt="" className="bgPokemon"/>
            <Profil />
            <Resources />
            <Bag />

            <div className="galleryDresseur">
                <div className="informationDresseur">
                    <div className="separate"> </div>
                    <div className="pseudoDresseur">
                        <p> Nom : </p>
                        <p> {idData.name} </p>
                    </div>
                    <div className="separate"> </div>
                    <div className="pokedexDresseur">
                        <p> Pokédex : </p>
                        <p> {idData.number} </p>
                    </div>
                    <div className="separate"> </div>
                    <div className="moneyDresseur">
                        <p> Or : </p>
                        <p> {idData.gold} </p>
                    </div>
                    <div className="separate"> </div>
                    <div className="dustDresseur">
                        <p> Poussière : </p>
                        <p> {idData.dust} </p>
                    </div>
                    <div className="separate"> </div>
                </div>

                <div className="badgeContainer">
                    <div className="badge">
                        <img src={Badge1} alt="" />
                    </div>
                    <div className="badge">
                        <img src={Badge2} alt="" />
                    </div>
                    <div className="badge">
                        <img src={Badge3} alt="" />
                    </div>
                    <div className="badge">
                        <img src={Badge4} alt="" />
                    </div>
                    <div className="badge">
                        <img src={Badge5} alt="" />
                    </div>
                    <div className="badge">
                        <img src={Badge6} alt="" />
                    </div>
                    <div className="badge">
                        <img src={Badge7} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dresseur;