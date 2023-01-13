import styled from "styled-components";
import { colorsMenu } from "../../colors";

export const FilterContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Filter = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const BtnFilter = styled.div`
  position: relative;
  width: 56px;
  height: 56px;
  background: ${colorsMenu.bgPrimaire};
  border-radius: 12px;
  overflow: hidden;

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-25deg);
    color: ${colorsMenu.light};
    font-weight: 600;
    font-size: 14px;
  }
  span {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: ${colorsMenu.light};
    font-size: 14px;
    color: ${colorsMenu.bgPrimaire};
    font-weight: 400;
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  &:hover {
    box-shadow: 3px 4px 15px ${colorsMenu.light},
      -3px 4px 15px ${colorsMenu.light}, 2px -2px 15px ${colorsMenu.light},
      -2px -2px 15px ${colorsMenu.light};
  }
`;
export const SearchBar = styled.div`
  height: 36px;
  width: 20%;
  min-width: 250px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  background: ${colorsMenu.light};
  color: ${colorsMenu.bgPrimaire};

  svg {
    font-size: 20px;
  }
  span {
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
  }
  input {
    color: ${colorsMenu.bgPrimaire};
    font-weight: 700;
    font-size: 14px;
    border: none;
    outline: none;

    &::placeholder {
      color: ${colorsMenu.bgPrimaire};
      font-weight: 700;
      font-size: 14px;
    }
  }
`;
