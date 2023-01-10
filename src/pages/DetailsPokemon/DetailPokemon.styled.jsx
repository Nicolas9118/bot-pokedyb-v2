import styled from "styled-components"
import { Link } from "react-router-dom"

export const DetailPokemonPage = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

`
export const BgPokemon = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
`
export const PreviewNext = styled(Link)`
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background: linear-gradient(rgba(57,130,85,1), rgba(166,219,151,1));
    color: #FFF;
    font-size: 48px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: #FFF;
        box-shadow: 2px 2px 10px rgba(57,130,85,1), -2px -2px 10px rgba(57,130,85,1);
        color: rgba(57,130,85,1);
    }
`
export const CardPokemonContainer = styled.div`
    position: relative;
    max-width: 600px;
    width: 90%;
    height: calc(100vh - 100px);
    background: linear-gradient(rgba(57,130,85,0.7), rgba(166,219,151,0.7));
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 32px;
`
export const Numero = styled.div`
    position: absolute;
    top: 25px;
    left: 25px;
    color: #3c6a66;
    font-size: 36px;
    font-weight: 700;
    text-shadow: 2px 2px 3px #FFF;
`
export const Exemplaire = styled.span`
    position: absolute;
    top: 25px;
    right: 25px;
    font-size: 24px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3c6a66;
    font-weight: 700;
    text-shadow: 2px 2px 3px #FFF;

        img {
            width: 24px;
            height: 24px;
            margin-right: 5px;
        }
`