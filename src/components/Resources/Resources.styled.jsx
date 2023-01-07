import styled from "styled-components"

export const ResourcesContainer = styled.div`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9;

    width: 33%;
    height: 60px;
    
    background: rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);

    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 24px;

    /*  ----  Responsive tablet  ----  */
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        width: 50%;
    }

    /*  ----  Responsive SmartPhone  ----  */
    @media screen and (max-width: 767px) {
        flex-direction: column;
        width: auto;
        padding: 15px;
        font-size: 16px;
        transform: translateX(-35%);
    }   
`