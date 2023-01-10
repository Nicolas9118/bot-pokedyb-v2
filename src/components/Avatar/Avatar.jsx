import React from "react";
import { AvatarContainer, AvatarName, AvatarProfil, Level, LevelBar } from "./Avatar.styled";

// import Dresseur from "../../assets/dresseur.png"
import AvatarFace from "../../assets/Poke_Dyb.png"

const Avatar = () => {
    return (
        <AvatarContainer>
            <AvatarProfil>
                <img src={AvatarFace} alt="" />
            </AvatarProfil>
            <Level> 43 </Level>
            <LevelBar> <div></div> </LevelBar>
            <AvatarName> Nishi-Senpai </AvatarName>
        </AvatarContainer>
    )
}

export default Avatar;