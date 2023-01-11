import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0px;
`;
export const MenuNavigation = styled.div`
  background: #9184ff;
  width: 300px;
  height: 300px;
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
  right: 50%;
  transform: ${({ status }) =>
    status ? "translate(50%, -50%) scale(1)" : "translate(50%, -50%) scale(0)"};
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  text-shadow: #000 1px 0 10px;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.1px);
  -webkit-backdrop-filter: blur(6.1px);
  overflow: hidden;
  box-shadow: 2px 2px 10px rgba(255, 255, 255, 1);

  &:nth-child(1) {
    background: rgba(253, 61, 56, 0.7);
    top: ${({ status }) => (status ? "0%" : "50%")};
    right: 50%;
    transform: ${({ status }) =>
      status
        ? "translate(50%, -50%) scale(1)"
        : "translate(50%, -50%) scale(0)"};
    transition: ${({ status }) =>
      status ? "transform 0.2s ease 0.5s" : "all 0.2s ease 1s"};
    p {
      transform: rotate(-25deg);
    }
    &:hover {
      color: rgba(253, 61, 56, 1);
      background: rgba(255, 255, 255, 0.7);
    }
  }
  &:nth-child(2) {
    background: rgba(254, 168, 66, 0.7);
    top: ${({ status }) => (status ? "9.5%" : "50%")};
    right: ${({ status }) => (status ? "23%" : "50%")};
    transform: ${({ status }) =>
      status
        ? "translate(50%, -50%) scale(1)"
        : "translate(50%, -50%) scale(0)"};
    transition: ${({ status }) =>
      status ? "transform 0.2s ease 0.7s" : "all 0.2s ease 0.8s"};
    p {
      transform: rotate(-20deg);
    }
    &:hover {
      color: rgba(254, 168, 66, 1);
      background: rgba(255, 255, 255, 0.7);
    }
  }
  &:nth-child(3) {
    background: rgba(131, 208, 103, 0.7);
    top: ${({ status }) => (status ? "35%" : "50%")};
    right: ${({ status }) => (status ? "3.5%" : "50%")};
    transform: ${({ status }) =>
      status
        ? "translate(50%, -50%) scale(1)"
        : "translate(50%, -50%) scale(0)"};
    transition: ${({ status }) =>
      status ? "transform 0.2s ease 0.9s" : "all 0.2s ease 0.6s"};
    p {
      transform: rotate(-15deg);
    }
    &:hover {
      color: rgba(131, 208, 103, 1);
      background: rgba(255, 255, 255, 0.7);
    }
  }
  &:nth-child(4) {
    background: rgba(52, 183, 248, 0.7);
    top: ${({ status }) => (status ? "65%" : "50%")};
    right: ${({ status }) => (status ? "3.5%" : "50%")};
    transform: ${({ status }) =>
      status
        ? "translate(50%, -50%) scale(1)"
        : "translate(50%, -50%) scale(0)"};
    transition: ${({ status }) =>
      status ? "transform 0.2s ease 1.1s" : "all 0.2s ease 0.4s"};
    p {
      transform: rotate(15deg);
    }
    &:hover {
      color: rgba(52, 183, 248, 1);
      background: rgba(255, 255, 255, 0.7);
    }
  }
  &:nth-child(5) {
    background: rgba(159, 103, 246, 0.7);
    top: ${({ status }) => (status ? "90.5%" : "50%")};
    right: ${({ status }) => (status ? "23%" : "50%")};
    transform: ${({ status }) =>
      status
        ? "translate(50%, -50%) scale(1)"
        : "translate(50%, -50%) scale(0)"};
    transition: ${({ status }) =>
      status ? "transform 0.2s ease 1.3s" : "all 0.2s ease 0.2s"};
    p {
      transform: rotate(20deg);
    }
    &:hover {
      color: rgba(159, 103, 246, 1);
      background: rgba(255, 255, 255, 0.7);
    }
  }
  &:nth-child(6) {
    background: rgba(255, 134, 77, 0.7);
    top: ${({ status }) => (status ? "100%" : "50%")};
    right: 50%;
    transform: ${({ status }) =>
      status
        ? "translate(50%, -50%) scale(1)"
        : "translate(50%, -50%) scale(0)"};
    transition: ${({ status }) =>
      status ? "transform 0.2s ease 1.5s" : "all 0.2s ease"};
    p {
      transform: rotate(25deg);
      font-size: 14px;
    }
    &:hover {
      color: rgba(255, 134, 77, 1);
      background: rgba(255, 255, 255, 0.7);
    }
  }
`;
export const BtnMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background: rgb(78, 76, 221);
  border-radius: 50%;
  border: 2px solid #fff;
  position: relative;
  z-index: 9;
  outline: none;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 10px rgba(253, 61, 56, 1);
    animation: shake 1.5s infinite ease;

    @keyframes shake {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(15deg);
      }
      50% {
        transform: rotate(-15deg);
      }
      75% {
        transform: rotate(15deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
