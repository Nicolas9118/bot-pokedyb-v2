import React from "react";
import "./style.css";
import BgLogin from "../../assets/Bg_Login.jpg"
import ProfChen from "../../assets/prof_chen.png"
import Profil from "../../assets/Poke_Dyb.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div className="login">
            <img src={BgLogin} alt="" />
            <div className="form">
                <div className="prof">
                    <img src={ProfChen} alt="" />
                </div>
                <div className="text">
                    <h3> Tout d'abord, quel est ton nom ? </h3>
                    <NavLink to="/Home" className="connect"> <FontAwesomeIcon icon={faDiscord} /> </NavLink>
                    <img src={Profil} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login;