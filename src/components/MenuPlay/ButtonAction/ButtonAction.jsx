import React from "react";
import { ButtonActionContainer, AnimationButton } from "./ButtonAction.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationArrow} from "@fortawesome/free-solid-svg-icons";

const ButtonAction = ({name}) => {
    return (
        <AnimationButton>
            
            <ButtonActionContainer>
                <div>
                    {name}
                </div>
            </ButtonActionContainer>
            
            <span> <FontAwesomeIcon icon={faLocationArrow} /> </span>
        </AnimationButton>
        
    )
}

export default ButtonAction;