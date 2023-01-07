import styled from "styled-components"
import { Link } from "react-router-dom"

export const BgHallOfFame = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
`

export const LinkDresseur = styled(Link)`
    height: 250px;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    &:hover {
        border: 3px solid yellow;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        box-shadow: 0 4px 60px rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
    }
`

export const SpriteDresseur = styled.img`
    object-fit: cover;
    height: 250px;
`

export const NameDresseur = styled.p`
    color: #FFF;
    font-size: 24px;
    font-weight: 700;
    margin-top: 20px;
`