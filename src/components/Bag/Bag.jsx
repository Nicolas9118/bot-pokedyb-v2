/*  ----  Import des modules  ----  */
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

/*  ----  Import du CSS  ----  */
import "./style.css";

/*  ----  Import des icones  ----  */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBagShopping, faGopuram, faTowerObservation, faTree, faHandshake, faComputer, faPeopleGroup} from "@fortawesome/free-solid-svg-icons";

const Bag = () => {
    const [currentToggle, setCurrentToggle] = useState(false);
    const handleChangeToggle = () => {
        setCurrentToggle(!currentToggle);
    }
    return (
        <nav className={`menu${currentToggle ? "On" : "Off"}`}>
            <span className="toggle" onClick={handleChangeToggle}> <FontAwesomeIcon icon={faBagShopping} /> </span>
            <div className="navigation">
                    <div className="pocket">
                        <NavLink to="/Invoc" className="linkSummon">
                            <FontAwesomeIcon icon={faGopuram} />
                        </NavLink>
                        <span className="title"> Hall <br /> d'Invocation </span>
                    </div>
                    <div className="pocket">
                        <NavLink to="/Tour" className="linkTower">
                            <FontAwesomeIcon icon={faTowerObservation} />
                        </NavLink>
                        <span className="title"> Tour <br /> Pokemon </span>
                    </div>
                    <div className="pocket">
                        <NavLink to="/Safari" className="linkSafari">
                            <FontAwesomeIcon icon={faTree} />
                        </NavLink>
                        <span className="title"> Parc <br /> Safari </span>
                    </div>
                    <div className="pocket">
                        <NavLink to="/Trade" className="linkTrade">
                            <FontAwesomeIcon icon={faHandshake} />
                        </NavLink>
                        <span className="title"> Centre <br /> d'échange </span>
                    </div>
                    <div className="pocket">
                        <NavLink to="/HallOfFame" className="linkHallOfFame">
                            <FontAwesomeIcon icon={faPeopleGroup} />
                        </NavLink>
                        <span className="title"> Hall <br /> of Fame </span>
                    </div>
                    <div className="pocket">
                        <NavLink to="/Pokedex" className="linkPokedex">
                            <FontAwesomeIcon icon={faComputer} />
                        </NavLink>
                        <span className="title"> Pokedex </span>
                    </div>
                </div>
        </nav>
    )
}

export default Bag;