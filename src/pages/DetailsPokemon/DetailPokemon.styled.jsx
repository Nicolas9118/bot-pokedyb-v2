import styled from "styled-components"

export const BgPokedex = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
`

export const InfoContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;

    /*  ----  Responsive SmartPhone  ----  */
/* @media screen and (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
        row-gap: 50px;
        margin-top: 15px;
    } */
`

export const InfoDetail = styled.div`
    width: 45%;
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 24px;
    color: #FFF;
    font-weight: 700;

    /*  ----  Responsive SmartPhone  ----  */
    /* @media screen and (max-width: 767px) {
        width: 100%;
        min-height: 250px;
    } */
`

export const Description = styled.div`
    width: 90%;
    height: 55%;

    h3 {
        font-size: 32px;
        margin: 30px 0;
    }
`

export const Cost = styled.div`
    width: 90%;
    height: 35%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 25px;

    div {
        width: 33%;
        height: 35%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const Possession = styled.div`
    width: 100%;
    height: 45%;

    p {
        font-size: 20px;
        overflow: hidden;
    }
`

export const SpritePokemon = styled.img`
    position: fixed;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%);

    /*  ----  Responsive SmartPhone  ----  */
    /* @media screen and (max-width: 767px) {
        height: 320px;
        width: 320px;
    } */
`