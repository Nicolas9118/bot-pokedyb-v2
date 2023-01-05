import React from "react";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoins, faTicket, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from "@fortawesome/free-brands-svg-icons"

const Resources = () => {
    return (
        <div className="resourcesContainer">
            <div className="resources">
                <span> 1500 </span>
                <span className="icon"> <FontAwesomeIcon icon={faCoins} /> </span>
            </div>
            <div className="resources">
                <span> 680 </span>
                <span className="icon"> <FontAwesomeIcon icon={faEthereum} /> </span>
            </div>
            <div className="resources">
                <span> 14 </span>
                <span className="icon"> <FontAwesomeIcon icon={faTicket} /> </span>
            </div>
            <div className="resources">
                <span> 28 </span>
                <span className="icon"> <FontAwesomeIcon icon={faReceipt} /> </span>
            </div>
        </div>
    )
}

export default Resources;