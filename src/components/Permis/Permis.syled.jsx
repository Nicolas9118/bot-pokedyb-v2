import styled from "styled-components";

export const PermisContainer = styled.div`
  position: fixed;
  top: 25px;
  right: 225px;
  bottom: 25px;
  max-width: 500px;
  width: 90%;
  background: linear-gradient(
    rgba(255, 241, 202, 255),
    rgba(255, 255, 255, 255)
  );
  border-radius: 32px;
  transform: scale(${({ status }) => (status ? "1" : "0")});
  transition: transform 0.5s ease;
  transform-origin: right top;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const PresentationPermis = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const NamePermis = styled.div`
  color: #f8c83a;
  font-size: 32px;
  font-weight: 700;
  text-shadow: #000 1px 0 10px;
  margin: 60px 0 0 20px;
`;
export const SpritePermis = styled.img`
  filter: drop-shadow(15px 5px 7px #f8c83a);
  margin: 0 60px 0 60px;
`;
