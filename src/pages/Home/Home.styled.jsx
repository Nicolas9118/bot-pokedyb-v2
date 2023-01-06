import styled from "styled-components"

export const BgHome = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
`

export const Team = styled.div`
    position: fixed;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;

    background: rgba(0, 0, 0, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;

    div {
        width: 13%;
    }
    img {
        width: 100%;
    }
`

export const ButtonContainer = styled.div`
    position: fixed;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%);
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`