import React from "react";

import { ProfilContainer, AvatarContainer, SignOut } from "./Profil.styled"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

import Avatar from "../../assets/Poke_Dyb.png"

const Profil = () => {
    return (
        <ProfilContainer>
            <AvatarContainer>
                <img src={Avatar} alt="" />
                <SignOut to="/">
                    <FontAwesomeIcon icon={faSignOut} />
                </SignOut>
            </AvatarContainer>

            <div> Nishiii </div>
            <div> 260 / 386 </div>
            
        </ProfilContainer>
    )
}

export default Profil;