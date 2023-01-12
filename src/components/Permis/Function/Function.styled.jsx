import styled from "styled-components";

export const FunctionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const FunctionContain = styled.div`
  position: relative;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: #4c7379;
    text-align: center;
  }
`;
export const InfoFunction = styled.span`
  position: absolute;
  top: 0px;
  left: -50px;
  transform: translateX(-50%);
  padding: 8px 16px;
  border-radius: 10px;
  background: rgba(80, 80, 80, 0.4);
  color: #f8c83a;
  font-weight: 600;
  font-size: 14px;
  text-shadow: #000 1px 0 10px;
  transform: scale(0);
  transition: transform 0.5s ease;
`;
export const BtnFunction = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(
    105deg,
    rgba(167, 210, 156, 255),
    rgba(51, 206, 164, 255)
  );

  &:hover {
    ~ span {
      transform: scale(1) rotate(-45deg);
      transition: transform 0.5s ease;
    }
  }
`;
