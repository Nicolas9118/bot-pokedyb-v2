import styled from "styled-components"
import { Link } from "react-router-dom"

export const BgPokedex = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
`

export const LinkPokemon = styled(Link)`
    height: 120px;
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &:hover {
        background: rgba(255, 255, 255, 0.6);
        box-shadow: 0 4px 60px rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border-radius: 50%;

        &::before {
            content: "Numéro Name";
            width: 150px;
            height: 50px;
            position: absolute;
            top: 0;
            left: 0;
            transform: translate(-25%, -125%);
            background: rgba(255, 255, 255, 0.6);
            box-shadow: 0 4px 60px rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border-radius: 15px;
            border: 2px solid yellow;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`

export const SpritePokemon = styled.img`
    object-fit: cover;
    height: 120px;
    width: 120px;
`

export const SpritePokeball = styled.img`
    width: 32px;
    height: 32px;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
`