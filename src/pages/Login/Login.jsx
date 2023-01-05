import React from "react";
import "./style.css";
import BgLogin from "../../assets/bg_login3.png"
import Welcome from "../../assets/Bienvenue.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div className="login">
            <img src={BgLogin} alt="" className="background"/>
            <img src={Welcome} alt="" className="entry"/>
            <NavLink to="/Home" className="welcome"> 
                <FontAwesomeIcon icon={faDiscord} />
            </NavLink>
        </div>
    )
}

export default Login;