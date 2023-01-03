import React from "react";
import "./style.css";

import Dresseur from "../../assets/dresseur.png"
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoins, faTicket, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

const CardDresseur = () => {
    return (
        <NavLink to="/" className="cardDresseur">
            <img src={Dresseur} alt="" />
            
            <div className="cardDresseur_detail">
                <h3 className="cardDresseur_name"> Nishiii </h3>
                <p> Nb / Total </p>
                <p> Valeur en Dust </p>
                <div className="cardDresseur_resource">
                    <p> 1500 <FontAwesomeIcon icon={faCoins} /> </p>
                    <p> 680 <FontAwesomeIcon icon={faEthereum} /></p>
                    <p> 14 <FontAwesomeIcon icon={faTicket} /> </p>
                    <p> 28 <FontAwesomeIcon icon={faReceipt} /> </p>
                </div>
            </div>
        </NavLink>
    )
}

export default CardDresseur;