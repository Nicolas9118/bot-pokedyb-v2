import styled from "styled-components"

export const Action = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    max-width: 250px;

    border-radius: 15px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);

    color: #FFF;
    font-weight: 700;
    font-size: 28px;
    text-align: center;

    &:nth-child(1) {
        background: rgba(253, 61, 56, 0.7);
    }

    &:nth-child(2) {
        background: rgba(131,208,103, 0.7);
    }

    &:nth-child(3) {
        background: rgba(52,183,248, 0.7);
    }
`