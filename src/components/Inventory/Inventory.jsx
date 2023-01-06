/*  ----  Import des modules  ----  */
import React from "react";
import { useState } from "react";

/*  ----  Import du Style  ----  */
import { InventoryContainer, Navigation, Pocket, TitlePocket, Toggle, Travel } from "./Inventory.styled"

/*  ----  Import des icones  ----  */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBagShopping, faGopuram, faTowerObservation, faTree, faHandshake, faComputer, faPeopleGroup} from "@fortawesome/free-solid-svg-icons";
// import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const Inventory = () => {
    const [currentToggle, setCurrentToggle] = useState(false);
    const handleChangeToggle = () => {
        setCurrentToggle(!currentToggle);
    }
    console.log(currentToggle);
    
    return (
        <InventoryContainer status={currentToggle}>
            <Toggle onClick={handleChangeToggle} > <FontAwesomeIcon icon={faBagShopping} /> </Toggle>
            <Navigation status={currentToggle}>
                    <Pocket>
                        <Travel to="/Invoc">
                            <FontAwesomeIcon icon={faGopuram} />
                        </Travel>
                        <TitlePocket> Hall <br /> d'Invocation </TitlePocket>
                    </Pocket>
                    <Pocket>
                        <Travel to="/Tour" className="linkTower">
                            <FontAwesomeIcon icon={faTowerObservation} />
                        </Travel>
                        <TitlePocket> Tour <br /> Pokemon </TitlePocket>
                    </Pocket>
                    <Pocket>
                        <Travel to="/Safari" className="linkSafari">
                            <FontAwesomeIcon icon={faTree} />
                        </Travel>
                        <TitlePocket> Parc <br /> Safari </TitlePocket>
                    </Pocket>
                    <Pocket>
                        <Travel to="/Trade" className="linkTrade">
                            <FontAwesomeIcon icon={faHandshake} />
                        </Travel>
                        <TitlePocket> Centre <br /> d'échange </TitlePocket>
                    </Pocket>
                    <Pocket>
                        <Travel to="/HallOfFame" className="linkHallOfFame">
                            <FontAwesomeIcon icon={faPeopleGroup} />
                        </Travel>
                        <TitlePocket> Hall <br /> of Fame </TitlePocket>
                    </Pocket>
                    <Pocket>
                        <Travel to="/Pokedex" className="linkPokedex">
                            <FontAwesomeIcon icon={faComputer} />
                        </Travel>
                        <TitlePocket> Pokedex </TitlePocket>
                    </Pocket>
            </Navigation>
        </InventoryContainer>
    )
}

export default Inventory;