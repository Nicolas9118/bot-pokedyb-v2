import styled from "styled-components";
import { colorsMenu } from "../../colors";

export const ResourcesContainer = styled.div`
  position: fixed;
  top: 25px;
  right: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
export const ResourcesContain = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  min-width: 130px;
  background: rgba(0, 0, 0, 0.5);
  transform: skew(-25deg);
  border-radius: 8px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;

  p {
    transform: skew(25deg);
    color: ${colorsMenu.light};
    font-weight: 700;
    font-size: 20px;
  }

  img {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-35%, -50%);
    height: 90%;
  }
`;
