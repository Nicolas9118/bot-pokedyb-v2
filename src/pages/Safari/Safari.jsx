import React from "react";
import { BgSafari } from "./Safari.styled";

import BgCapture from "../../assets/bg_safari_clean.png"

import Profil from "../../components/Profil/Profil"
import Resources from "../../components/Resources/Resources"
import Inventory from "../../components/Inventory/Inventory"
import MenuPlay from "../../components/MenuPlay/MenuPlay";


const Safari = () => {
    return (
        <>
            <Profil />
            <Resources />
            <Inventory />

            <BgSafari src={BgCapture} alt="" />
            <MenuPlay />
            
        </>
    )
}

export default Safari;