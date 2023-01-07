import React from "react";
import { GalleryContainer } from "./Gallery.styled";


const Gallery = ({children}) => {
    console.log({children});
    return (
        <GalleryContainer>
            {children}
        </GalleryContainer>
    )
}

export default Gallery;