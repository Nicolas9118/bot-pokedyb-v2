import styled from "styled-components";

export const StatContainer = styled.div`
  position: relative;
  width: 100%;
  border-top: 3px solid #b4b4b4;
  padding-top: 15px;
`;
export const StatTitle = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 6px 12px;
  background: #fffaef;
  color: #b4b4b4;
  /* text-shadow: 2px 2px 3px #b4b4b4; */
  font-weight: 700;
  border-radius: 16px;
  text-transform: uppercase;
`;
export const StatContain = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 15px 0;

  span {
    color: #3f6572;
    font-weight: 700;
    font-size: 20px;
  }
  p {
    background: -webkit-linear-gradient(
      105deg,
      rgba(167, 210, 156, 255),
      rgba(51, 206, 164, 255)
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 16px;
    font-weight: 700;
  }
`;
