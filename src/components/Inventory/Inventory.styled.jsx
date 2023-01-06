import styled from "styled-components"
import { Link } from "react-router-dom";

export const InventoryContainer = styled.nav`
    position: fixed;
    top: 20px;
    right: 20px;
    margin: auto;
    z-index: 9;

    background: rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;

    width: ${({ status }) => status ? "calc(100% - 40px)" : "100px"};
    height: ${({ status }) => status ? "calc(100vh - 40px)" : "100px"};

`

export const Toggle = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100px;
    height: 100px;
    font-size: 64px;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Navigation = styled.div`
    display: ${({ status }) => status ? "flex" : "none"};
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
`

export const Pocket = styled.div`
    width: 200px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    &:nth-child(1){
        a {
            background: rgba(253, 61, 56, 0.7);
        }
    }
    &:nth-child(2){
        a {
            background: rgba(254,168,66, 0.7);
        }
    }
    &:nth-child(3){
        a {
            background: rgba(131,208,103, 0.7);
        }
    }
    &:nth-child(4){
        a {
            background: rgba(52,183,248, 0.7);
        }
    }
    &:nth-child(5){
        a {
            background: rgba(159,103,246, 0.7);
        }
    }
    &:nth-child(6){
        a {
            background: rgba(255,134,77, 0.7);
        }
    }

    /*  ----  Responsive SmartPhone  ----  */
    @media screen and (max-width: 767px) {
        width: 90px;
        height: 150px;
    }
`

export const TitlePocket = styled.div`
    min-height: 96px;
    color: #FFF;
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    text-shadow: #000 1px 0 10px;

    /*  ----  Responsive SmartPhone  ----  */
    @media screen and (max-width: 767px) {
        font-size: 16px;
    }
`

export const Travel = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 96px;
    color: #FFF;

    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.1px);
    -webkit-backdrop-filter: blur(6.1px);

    width: 100px;
    height: 100px;
    overflow: hidden;

    svg {
        transform: rotate(-25deg);
    }
    
    /*  ----  Responsive SmartPhone  ----  */
    @media screen and (max-width: 767px) {
        font-size: 48px;
        width: 60px;
        height: 60px;
    }
`