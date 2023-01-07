import styled from "styled-components"

export const AnimationButton = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    margin: 20px 0;
    position: relative;

    span {
        height: 100%;
        font-size: 36px;
        opacity: 0;

        svg {
            transform: rotate(45deg);
        }
    }

`

export const ButtonActionContainer = styled.div`
    width: 200px;
    height: 50px;
    background: white;

    box-shadow: 2px 2px 10px rgba(255, 255, 255, 1), -2px -2px 10px rgba(255, 255, 255, 1);
    border-radius: 14px;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        width: 190px;
        height: 40px;
        background: transparent;
        border: 4px solid yellow;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;

        color: #333;
        font-weight: 600;
        font-size: 24px;
    }

    &:hover {
        background: yellow;

        div {
            border: 4px solid white;
        }
    }
    &:hover + span {
        opacity: 1;
    }
`