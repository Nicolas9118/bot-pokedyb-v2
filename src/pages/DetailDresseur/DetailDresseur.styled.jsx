import styled from "styled-components"

export const DetailDresseurContainer = styled.div`
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