import React from "react";
import { ResourcesContainer } from "./Resources.styled"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoins, faTicket, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from "@fortawesome/free-brands-svg-icons"

const Resources = () => {
    return (
        <ResourcesContainer>
            <div>
                <span> 1500 </span>
                <span> <FontAwesomeIcon icon={faCoins} /> </span>
            </div>
            <div>
                <span> 680 </span>
                <span> <FontAwesomeIcon icon={faEthereum} /> </span>
            </div>
            <div>
                <span> 14 </span>
                <span> <FontAwesomeIcon icon={faTicket} /> </span>
            </div>
            <div>
                <span> 28 </span>
                <span> <FontAwesomeIcon icon={faReceipt} /> </span>
            </div>
        </ResourcesContainer>
    )
}

export default Resources;