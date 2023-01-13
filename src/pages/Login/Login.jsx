import React from "react";

import { Background, Hall, LoginContainer, Welcome } from "./Login.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

import BgLogin from "../../assets/bg_login3.png";
import WelcomePokemon from "../../assets/Bienvenue.png";

const Login = () => {
  return (
    <LoginContainer>
      <Background src={BgLogin} alt=" Fond de la page Login" />
      <Welcome src={WelcomePokemon} alt="Texte de bienvenue" />
      <Hall to="/Home">
        <FontAwesomeIcon icon={faDiscord} />
      </Hall>
    </LoginContainer>
  );
};

export default Login;
