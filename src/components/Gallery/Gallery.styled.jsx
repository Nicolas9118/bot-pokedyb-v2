import styled from "styled-components"
// import DessinPokedex from "../../assets/bg_pokedex.jpg"

export const GalleryContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70.3%;
    height: 70.3%;
    overflow-y: auto;

    background: url("/images/bg_pokedex.jpg") repeat-y top/100% rgba(0, 0, 0, 0.2) ;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    /* border-top-left-radius: 15px;
    border-bottom-left-radius: 15px; */
    border-radius: 15px;

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

// export const SpritePokedex = styled.img`
//     object-fit: cover;
//     width: 100%;
//     height: 100%;
//     position: fixed;
//     top: 0;
//     left: 0;
//     z-index: -1;
//     border-radius: 15px;
// `