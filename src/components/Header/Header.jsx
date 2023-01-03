import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGopuram, faTowerObservation, faTree, faHandshake, faComputer, faPeopleGroup, faSignOut, faCoins, faTicket, faReceipt} from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from "@fortawesome/free-brands-svg-icons"

import Profil from "../../assets/Poke_Dyb.png"

const Header = () => {
    return (
            <nav className="nav">
                <ul className="menu left">
                    <li className="list">
                        <NavLink to="/Invoc">
                            <span class="title"> Hall d'Invocation </span>
                            <span class="icon"> <FontAwesomeIcon icon={faGopuram} /> </span>
                        </NavLink>
                    </li>
                    <li className="list">
                        <NavLink to="/Tour">
                            <span class="title"> Tour Pokemon </span>
                            <span class="icon"> <FontAwesomeIcon icon={faTowerObservation} /> </span>
                        </NavLink>
                    </li>
                    <li className="list">
                        <NavLink to="/Safari">
                            <span class="title"> Parc Safari </span>
                            <span class="icon"> <FontAwesomeIcon icon={faTree} /> </span>
                        </NavLink>
                    </li>
                    <li className="list">
                        <NavLink to="/Trade">
                            <span class="title"> Centre d'échange </span>
                            <span class="icon"> <FontAwesomeIcon icon={faHandshake} /> </span>
                        </NavLink>
                    </li>
                    <li className="list">
                        <NavLink to="/HallOfFame">
                            <span class="title"> Hall of Fame </span>
                            <span class="icon"> <FontAwesomeIcon icon={faPeopleGroup} /> </span>
                        </NavLink>
                    </li>
                </ul>

                <div className="profil">
                    <div className="bordure">
                        <img src={Profil} alt="" />
                    </div>
                    <NavLink to="/Pokedex">
                        <span class="icon"> <FontAwesomeIcon icon={faComputer} /> </span>
                        <span class="title"> Pokedex </span>
                    </NavLink>
                </div>

                <ul className="menu right">
                    <li className="list">
                        <span class="title"> Or </span>
                        <div>
                            <span> 1500 </span>
                            <span class="icon"> <FontAwesomeIcon icon={faCoins} /> </span>
                        </div>
                    </li>
                    <li className="list">
                        <span class="title"> Poussières </span>
                        <div>
                            <span> 680 </span>
                            <span class="icon"> <FontAwesomeIcon icon={faEthereum} /> </span>
                        </div>
                    </li>
                    <li className="list">
                        <span class="title"> Ticket Tour </span>
                        <div>
                            <span> 14 </span>
                            <span class="icon"> <FontAwesomeIcon icon={faTicket} /> </span>
                        </div>
                    </li>
                    <li className="list">
                        <span class="title"> Ticket Safari </span>
                        <div>
                            <span> 28 </span>
                            <span class="icon"> <FontAwesomeIcon icon={faReceipt} /> </span>
                        </div>
                    </li>
                    <li className="list"> 
                        <NavLink to="/" className="SignOut">
                            <span class="title"> Déconnexion </span>
                            <span class="icon"> <FontAwesomeIcon icon={faSignOut} /> </span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
    )
}

export default Header;