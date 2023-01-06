import styled from "styled-components"

export const GalleryContainer = styled.div`
    position: fixed;
    top: 150px;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%);
    width: 80%;
    overflow-y: scroll;

    background: rgba(0, 0, 0, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;

    display: flex;
    flex-wrap: wrap;
    row-gap: 100px;
    column-gap: 30px;
    justify-content: center;
    align-items: center;

    &::-webkit-scrollbar{
        width: 5px;
        background: #666;
        border-radius: 35px;
    }

    &::-webkit-scrollbar-thumb{
        width: 300%;
        background: #FFF;
        border-radius: 35px;
    }

    @media screen and (max-width: 767px) {
        top: 200px;
    }
`