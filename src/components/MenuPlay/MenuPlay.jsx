import React from "react";
import ButtonAction from "./ButtonAction/ButtonAction";
import { MenuPlayContainer } from "./MenuPlay.styled";


const MenuPlay = () => {
    return (
        <MenuPlayContainer>
            <ButtonAction name="Lancer"/>
            <ButtonAction name="Appat"/>
            <ButtonAction name="Fuite"/>
        </MenuPlayContainer>
    )
}

export default MenuPlay;