import styled from "styled-components"
import { Link } from "react-router-dom";

export const ProfilContainer = styled.div`
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 9;
    
    width: 80px;
    height: 80px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    div {
        font-size: 12px;
    }
`

export const AvatarContainer = styled.div`
    width: 80px;
    height: 80px; 
    border-radius: 50%;

    background: rgba(0, 0, 0, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px); 
    
    img {
        object-fit: contain;
        height: 100%;
        width: 100%;
    }
`

export const SignOut = styled(Link)`
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(50%, 50%);
    width: 30px;
    height: 30px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
`