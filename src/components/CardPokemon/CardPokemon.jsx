import React from "react";
import "./style.css";

import Bulbi from "../../assets/bulbi.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLeaf, faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from "@fortawesome/free-brands-svg-icons"

const CardPokemon = () => {
    return (
        <div className="cardPokemon">
            <div to="/" className="cardPokemon_inner">
                <img src={Bulbi} alt="" />

                <div className="cardPokemon_front">
                    <div className="cardPokemon_detail">
                        <h2> #1 </h2>
                        <h3> Bulbizarre </h3>

                        <div className="cardPokemon_info">
                            <p> Type : <br/> <FontAwesomeIcon icon={faLeaf} /> / <FontAwesomeIcon icon={faSkullCrossbones} /> </p>
                            <p> Rareté : <br/> 10% </p>
                            <p> Craft : <br /> 180 <FontAwesomeIcon icon={faEthereum} /> </p>
                        </div>

                        <div className="containButton">
                            <button className="buttonPokemon"> DEZ </button>
                            <button className="buttonPokemon"> CRAFT </button>
                        </div>               
                    </div>
                </div>
                <div className="cardPokemon_back">
                    <div className="possession">
                        <p> 
                            Possédé par : <br />
                            Talyah / Taz / Rokeez (2) / Naiiade / Sanic_des_mers / Grimmouzzz / Susu / HypnoZ / Anargyres / 
                            Palmypède / Kira91 / Silverlord / GroovyKitten48 / Rainbow Unicorn / Nishi-Senpai
                        </p>
                        <p>
                            Manque à : <br />
                            Silverlord / GroovyKitten48
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default CardPokemon;