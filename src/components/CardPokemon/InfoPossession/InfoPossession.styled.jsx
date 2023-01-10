import styled from "styled-components"

export const BoutonDropContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    width: 100%;
    margin: 20px 0;
`
export const BoutonDropContain = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 10px auto;
`
export const BoutonDrop = styled.div`
    width: 100%;
    height: 50px;
    background: linear-gradient(rgba(57,130,85,0.7), rgba(166,219,151,0.7));
    box-shadow: -2px -2px 10px rgba(57,130,85,1);
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    color: #3c6a66;
    font-weight: 700;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    svg {
        margin: 0 20px;
    }
`
export const SubBoutonDrop = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 115px;
    padding: 10px 0;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    background: linear-gradient(rgba(166,219,151,0.7), rgba(57,130,85,0.7));
    color: #3c6a66;
    font-weight: 600;
    font-size: 14px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px;
    }
`