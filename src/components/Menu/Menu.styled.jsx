import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0px;
`;
export const MenuNavigation = styled.div`
  background: #9184ff;
  width: 460px;
  height: 460px;
  border-radius: 50%;
  border: 40px solid rgba(255, 255, 255, 0.239);
  position: absolute;
  z-index: 5;
  top: 50%;
  left: 50%;
  transform: ${({ status }) =>
    status
      ? "translate(-50%, -50%) scale(1)"
      : "translate(-50%, -50%) scale(0)"};
  transition: ${({ status }) =>
    status ? "transform 0.4s ease 0.2s" : "transform 0.4s ease 1.2s"};
`;

export const Pocket = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${({ status }) =>
    status
      ? "translate(-50%, -50%) scale(1)"
      : "translate(-50%, -50%) scale(0)"};
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  text-shadow: #000 1px 0 10px;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.1px);
  -webkit-backdrop-filter: blur(6.1px);
  overflow: hidden;

  /* Pourquoi la position top fonctionne mais pas right  */
  &:nth-child(1) {
    background: rgba(253, 61, 56, 0.7);
    top: ${({ status }) => (status ? "0%" : "50%")};
    right: 50%;
    transform: ${({ status }) =>
      status
        ? "translate(-50%, -50%) scale(1)"
        : "translate(-50%, -50%) scale(0)"};
    transition: ${({ status }) =>
      status ? "all 0.2s ease 0.5s" : "all 0.2s ease 1s"};
    p {
      transform: rotate(-25deg);
    }
  }
  &:nth-child(2) {
    background: rgba(254, 168, 66, 0.7);
    top: ${({ status }) => (status ? "20%" : "50%")};
    right: ${({ status }) => (status ? "37.5%" : "50%")};
    transform: ${({ status }) =>
      status
        ? "translate(-50%, -50%) scale(1)"
        : "translate(-50%, -50%) scale(0)"};
    transition: ${({ status }) =>
      status ? "all 0.2s ease 0.7s" : "all 0.2s ease 0.8s"};
    p {
      transform: rotate(-20deg);
    }
  }
  &:nth-child(3) {
    background: rgba(131, 208, 103, 0.7);
    top: ${({ status }) => (status ? "40%" : "50%")};
    right: ${({ status }) => (status ? "12.5%" : "50%")};
    transform: ${({ status }) =>
      status
        ? "translate(-50%, -50%) scale(1)"
        : "translate(-50%, -50%) scale(0)"};
    transition: ${({ status }) =>
      status ? "all 0.2s ease 0.9s" : "all 0.2s ease 0.6s"};
    p {
      transform: rotate(-15deg);
    }
  }
  &:nth-child(4) {
    background: rgba(52, 183, 248, 0.7);
    top: ${({ status }) => (status ? "60%" : "50%")};
    right: ${({ status }) => (status ? "12.5%" : "50%")};
    transform: ${({ status }) =>
      status
        ? "translate(-50%, -50%) scale(1)"
        : "translate(-50%, -50%) scale(0)"};
    transition: ${({ status }) =>
      status ? "all 0.2s ease 1.1s" : "all 0.2s ease 0.4s"};
    p {
      transform: rotate(15deg);
    }
  }
  &:nth-child(5) {
    background: rgba(159, 103, 246, 0.7);
    top: ${({ status }) => (status ? "80%" : "50%")};
    right: ${({ status }) => (status ? "37.5%" : "50%")};
    transform: ${({ status }) =>
      status
        ? "translate(-50%, -50%) scale(1)"
        : "translate(-50%, -50%) scale(0)"};
    transition: ${({ status }) =>
      status ? "all 0.2s ease 1.3s" : "all 0.2s ease 0.2s"};
    p {
      transform: rotate(20deg);
    }
  }
  &:nth-child(6) {
    background: rgba(255, 134, 77, 0.7);
    top: ${({ status }) => (status ? "100%" : "50%")};
    right: 50%;
    transform: ${({ status }) =>
      status
        ? "translate(-50%, -50%) scale(1)"
        : "translate(-50%, -50%) scale(0)"};
    transition: ${({ status }) =>
      status ? "all 0.2s ease 1.5s" : "all 0.2s ease"};
    p {
      transform: rotate(25deg);
    }
  }
`;
export const BtnMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background: rgb(78, 76, 221);
  border-radius: 50%;
  border: 2px solid #fff;
  position: relative;
  z-index: 9;
  outline: none;
  cursor: pointer;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
