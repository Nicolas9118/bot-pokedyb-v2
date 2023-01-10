import React from "react";

import { TriContainer, Filter, BoutonFilter, SearchBar}  from "./CleanSearch.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Pokedex = () => {
    return (
        <TriContainer>
            <Filter>
                <BoutonFilter>
                    <p> Kanto </p>
                    <span> 4 </span>
                </BoutonFilter>
                <BoutonFilter>
                    <p> Johto </p>
                    <span> 3 </span>
                </BoutonFilter>
                <BoutonFilter>
                    <p> Hoenn </p>
                    <span> 5 </span>
                </BoutonFilter>
                <BoutonFilter>
                    <p> Soon </p>
                    <span> 0 </span>
                </BoutonFilter>
                <BoutonFilter>
                    <p> Soon </p>
                    <span> 0 </span>
                </BoutonFilter>
                <BoutonFilter>
                    <p> Soon </p>
                    <span> 0 </span>
                </BoutonFilter>
            </Filter>

            <SearchBar>
                <span> <FontAwesomeIcon icon={faMagnifyingGlass} /> </span>
                <input type="search" placeholder="Nom Pokemon"/>
            </SearchBar>

            <Filter>
                <BoutonFilter>
                    <p> Tous </p>
                    <span> 386 </span>
                </BoutonFilter>
                <BoutonFilter>
                    <p> Capturés </p>
                    <span> 12 </span>
                </BoutonFilter>
                <BoutonFilter>
                    <p> Libres </p>
                    <span> 374 </span>
                </BoutonFilter>
                <BoutonFilter>
                    <p> Numéro </p>
                    <span> Tri </span>
                </BoutonFilter>
                <BoutonFilter>
                    <p> Rareté </p>
                    <span> Tri </span>
                </BoutonFilter>
                <BoutonFilter>
                    <p> Craft </p>
                    <span> Tri </span>
                </BoutonFilter>
            </Filter>
        </TriContainer>
    )
}

export default Pokedex;