import React from "react";

import {
  FilterContainer,
  Filter,
  BtnFilter,
  SearchBar,
} from "./CleanSearch.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Pokedex = () => {
  return (
    <FilterContainer>
      <Filter>
        <BtnFilter>
          <p> Kanto </p>
          <span> 4 </span>
        </BtnFilter>
        <BtnFilter>
          <p> Johto </p>
          <span> 3 </span>
        </BtnFilter>
        <BtnFilter>
          <p> Hoenn </p>
          <span> 5 </span>
        </BtnFilter>
        <BtnFilter>
          <p> Soon </p>
          <span> 0 </span>
        </BtnFilter>
        <BtnFilter>
          <p> Soon </p>
          <span> 0 </span>
        </BtnFilter>
        <BtnFilter>
          <p> Soon </p>
          <span> 0 </span>
        </BtnFilter>
      </Filter>

      <SearchBar>
        <span>
          {" "}
          <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
        </span>
        <input type="search" placeholder="Nom Pokemon" />
      </SearchBar>

      <Filter>
        <BtnFilter>
          <p> Tous </p>
          <span> 386 </span>
        </BtnFilter>
        <BtnFilter>
          <p> Capturés </p>
          <span> 12 </span>
        </BtnFilter>
        <BtnFilter>
          <p> Libres </p>
          <span> 374 </span>
        </BtnFilter>
        <BtnFilter>
          <p> Numéro </p>
          <span> Tri </span>
        </BtnFilter>
        <BtnFilter>
          <p> Rareté </p>
          <span> Tri </span>
        </BtnFilter>
        <BtnFilter>
          <p> Craft </p>
          <span> Tri </span>
        </BtnFilter>
      </Filter>
    </FilterContainer>
  );
};

export default Pokedex;
