import React from "react";
import { useParams } from "react-router-dom";
import { BgPokedex, SpritePokemon, InfoContainer, InfoDetail, Cost, Description, Possession } from "./DetailPokemon.styled";


import BgPrairie from "../../assets/bg_prairie.jpg"
// import Pokeball from "../../assets/pokeball.png"

import Profil from "../../components/Profil/Profil";
import Resources from "../../components/Resources/Resources";
import Inventory from "../../components/Inventory/Inventory";
import Gallery from "../../components/Gallery/Gallery"

/* Récupérer les données de mon fichier json */ 
import dataPokemon from '../../DataPokemon.json'

const DetailPokemon = () => {
    const { id } = useParams();
    const idData = dataPokemon.find( data => data.id  === id );
    
    return (
        <>
            <BgPokedex src={BgPrairie} alt=""/>
            <Profil />
            <Resources />
            <Inventory />

            <Gallery>
                <InfoContainer>
                    <InfoDetail>
                        <Description>
                            <p> Pokedex N° {idData.number} </p>
                            <h3> {idData.name} </h3>
                            <p> {idData.type} </p>
                        </Description>
                        <Cost>
                            <div>
                                <h4> Rareté : </h4>
                                <p> {idData.rarete} </p>
                            </div>
                            <div>
                                <h4> Craft : </h4>
                                <p> {idData.craft} </p>
                            </div>
                        </Cost>
                    </InfoDetail>
                    
                    <SpritePokemon src={idData.cover} alt="" className="spritePokemon"/>

                    <InfoDetail>
                        <Possession>
                            <h4> Possédé par : </h4>
                            <p> {idData.possession} </p>
                        </Possession>
                        <Possession>
                            <h4> Recherché par : </h4>
                            <p> {idData.manque} </p>
                        </Possession>
                    </InfoDetail>
                </InfoContainer>
            </Gallery>
            
        </>
    )
}

export default DetailPokemon;