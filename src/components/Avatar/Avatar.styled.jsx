import styled from "styled-components"
import { Link } from "react-router-dom"

export const AvatarContainer = styled.div`
    height: 200px;
    width: 200px;
    background: rgba(255,255,255,0.5);
    border-radius: 32px;
    position: fixed;
    top: 25px;
    left: 25px;

`
export const AvatarProfil = styled.div`
    width: 150px;
    height: 150px;
    margin-left: 10px;
    border-radius: 50%;
    background: #212b35;
    border: 5px solid #2c4348;
    img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: 50%;
    }
`
export const Level = styled.div`
    color: #FFF;
    font-weight: 700;
    font-size: 36px;
    position: absolute;
    top: 60%;
    left: 5px;
    transform: translateY(-50%);
    text-shadow: 2px 2px 3px #000;
`
export const LevelBar = styled.div`
    width: 100%;
    height: 15px;
    background: #f4a415;
`
export const LevelEffect = styled.div`
    position: absolute;
    top: 2px;
    left: 3px;
    right: 3px;
    height: 45%;
    background: rgba(255, 255, 255, 0.28);
    border-radius: 5px;
    z-index: 1;
`
export const ButtonLevelFilling = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    /* width: ${({ level }) => {}}; */
    width: 50%;
    background: #007f9a;
    border-radius: 10px;
    z-index: 1;
`
export const AvatarName = styled.div`
    
`