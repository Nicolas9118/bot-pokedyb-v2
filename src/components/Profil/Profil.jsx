import React from "react";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

import Avatar from "../../assets/Poke_Dyb.png"
import { NavLink } from "react-router-dom";

const Profil = () => {
    return (
        <div className="profilContainer">
            <div className="avatarContainer">
                <img src={Avatar} alt="" />
                <NavLink to="/" className="signOut">
                    <FontAwesomeIcon icon={faSignOut} />
                </NavLink>
            </div>
            <div> Nishiii </div>
            <div> 260 / 386 </div>
        </div>
    )
}

export default Profil;