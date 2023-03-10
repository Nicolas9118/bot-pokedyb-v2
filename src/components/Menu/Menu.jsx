/*  ----  Import des depencies  ----  */
import React from "react";
import { useState } from "react";
/*  ----  Import du style  ----  */
import { BtnMenu, MenuNavigation, MenuContainer, Pocket } from "./Menu.styled";
/*  ----  Import des images  ----  */
import BtnMenuPokeball from "../../assets/pokeball.png";

const Menu = () => {
  const [currentToggle, setCurrentToggle] = useState(false);
  const handleChangeToggle = () => {
    setCurrentToggle(!currentToggle);
  };
  return (
    <MenuContainer>
      <MenuNavigation status={currentToggle}>
        <Pocket to="/Summon" status={currentToggle}>
          <p> Invoc </p>
        </Pocket>
        <Pocket to="/Tower" status={currentToggle}>
          <p> Tour </p>
        </Pocket>
        <Pocket to="/Safari" status={currentToggle}>
          <p> Safari</p>
        </Pocket>
        <Pocket to="/Trade" status={currentToggle}>
          <p> Trade </p>
        </Pocket>
        <Pocket to="/HallOfFame" status={currentToggle}>
          <p> Hall </p>
        </Pocket>
        <Pocket to="/Pokedex" status={currentToggle}>
          <p> Pokedex </p>
        </Pocket>
      </MenuNavigation>

      <BtnMenu onClick={handleChangeToggle}>
        <img src={BtnMenuPokeball} alt="" />
      </BtnMenu>
    </MenuContainer>
  );
};

export default Menu;
