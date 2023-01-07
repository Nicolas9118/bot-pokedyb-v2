import styled from "styled-components"

export const MenuPlayContainer = styled.div`
    position: fixed;
    bottom: 3%;
    left: 2%;
    width: 300px;
    height: 300px;

    background: rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`