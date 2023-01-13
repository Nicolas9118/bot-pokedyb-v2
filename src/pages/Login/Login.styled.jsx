import styled from "styled-components";
import { Link } from "react-router-dom";
import { colorsMenu } from "../../colors";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
export const Background = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;
export const Welcome = styled.img`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);

  /*  ----  Responsive SmartPhone  ----  */
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`;
export const Hall = styled(Link)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-48%, -23%);
  width: 255px;
  height: 255px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.9px);
  -webkit-backdrop-filter: blur(0.9px);
  border: 1px solid rgba(255, 255, 255, 0.13);

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colorsMenu.bgPrimaire};
  font-size: 32px;
`;
