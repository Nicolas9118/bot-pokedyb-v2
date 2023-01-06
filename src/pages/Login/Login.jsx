import React from "react";

import { Background, Entry, LoginContainer, Welcome } from "./Login.styled"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord } from "@fortawesome/free-brands-svg-icons";


import BgLogin from "../../assets/bg_login3.png"
import WelcomePokemon from "../../assets/Bienvenue.png"


const Login = () => {
    return (
        <LoginContainer>
            <Background src={BgLogin} alt=" Fond de la page Login"/>
            <Welcome src={WelcomePokemon} alt="Texte de bienvenue" />
            <Entry to="/Home"> 
                <FontAwesomeIcon icon={faDiscord} />
            </Entry>
        </LoginContainer>
    )
}

export default Login;