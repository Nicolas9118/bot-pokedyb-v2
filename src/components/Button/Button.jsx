import React from "react";
import { Action } from "./Button.styled";

const Button = ({name, type}) => {
    return (
        <Action>
            {name}
        </Action>
    )
}

export default Button;