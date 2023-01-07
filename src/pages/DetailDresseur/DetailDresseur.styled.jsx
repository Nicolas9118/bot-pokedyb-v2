import styled from "styled-components"

export const BgDetailPokemon = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
`

export const InfoDresseur = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 16px;
    width: 45%;
    height: 100%;

    color: #FFF;
    font-size: 32px;
    font-weight: 700;

    span {
        background: yellow;
        width: 100%;
        height: 10px;
        border-radius: 35%;
        margin: 30px 0;
    }

    div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }
`

export const BadgeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 100px;

    border-radius: 16px;
    width: 45%;
    height: 100%;

    div {
        width: 100px;
        height: 100px;
        border: 5px solid #666;
        border-radius: 35px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            object-fit: contain;
            width: 100px;
            height: 100px;
            border-radius: 35px;
            filter: grayscale(1);
        }
    }

    /*  ----  Responsive SmartPhone  ----  */
    /* @media screen and (max-width: 767px) {
        width: 100%;
        column-gap: 50px;
        row-gap: 50px;
    } */
`