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
export const PokedexContainer = styled.div`
    position: fixed;
    top: 200px;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%);
    width: 65%;
    background: linear-gradient(#e1d9fd, #9184ff );
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`
export const HeaderPokedexContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 175px;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 5px solid #FFF;
`
export const TitlePokedex = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #9184ff;
    margin: 15px 0;
`
export const TriContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Filter = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const BoutonFilter = styled.div`
    position: relative;
    width: 56px;
    height: 56px;
    background: #9184ff;
    border-radius: 12px;
    overflow: hidden;

    p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-25deg);
        color: #FFF;
        font-weight: 600;
        font-size: 14px;
    }
    span {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: #FFF;
        font-size: 14px;
        color: #9184ff;
        font-weight: 400;
        position: absolute;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    &:hover {
        box-shadow: 3px 4px 15px #fff, -3px 4px 15px #fff, 2px -2px 15px #fff, -2px -2px 15px #fff;
    }
`
export const SearchBar = styled.div`
    height: 36px;
    width: 20%;
    min-width: 250px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 20px;
    background: #FFF;
    color: #9184FF;
    
    svg {
        font-size: 20px;
    }
    span {
        width: 36px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 5px;
    }
    input {
        color: #9184FF;
        font-weight: 700;
        font-size: 14px;
        border: none;
        outline: none;
        
        &::placeholder {
            color: #9184FF;
            font-weight: 700;
            font-size: 14px;
        }
    }
`
export const BodyPokedexContainer = styled.div`
    position: absolute;
    top: 195px;
    left: 0;
    bottom: 0;
    overflow: auto;
    width: 98%;
    margin: auto;

    &::-webkit-scrollbar{
        width: 5px;
        background: #FFF;
        border-radius: 35px;
    }

    &::-webkit-scrollbar-thumb{
        width: 300%;
        background: #666;
        border-radius: 35px;
    }
`
export const FakeBodyPokedexContainer = styled.div`
    position: relative;
    margin: 10px;
`
export const Region = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    grid-gap: 15px;
    flex-wrap: wrap;
    margin: 30px auto;
    padding-top: 30px;

    border-top: 5px solid #9184ff;
    
`
export const TitleRegion = styled.div`
    width: 100px;
    height: 24px;
    position: absolute;
    top: 0;
    left: -1%;
    transform: translateY(-50%);
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    background: #9184FF;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;

`
export const Card = styled(Link)`
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 16px;
    background: #c2d2ff;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-size: 32px;
    font-weight: 300;
`
export const SpritePokemon = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    height: 100px;
    width: 100px;
`