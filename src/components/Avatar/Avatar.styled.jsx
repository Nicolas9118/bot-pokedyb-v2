import styled from "styled-components";

export const AvatarContainer = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 32px;
  position: fixed;
  top: 25px;
  right: 25px;
`;
export const AvatarProfil = styled.div`
  width: 150px;
  height: 150px;
  margin-left: 10px;
  border-radius: 50%;
  background: rgba(166, 219, 151, 0.7);
  border: 5px solid rgba(57, 130, 85, 0.7);
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
`;
export const Level = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 36px;
  position: absolute;
  top: 62%;
  left: 5px;
  transform: translateY(-50%);
  text-shadow: 2px 2px 3px #000;
`;
export const LevelBar = styled.div`
  position: relative;
  width: 100%;
  height: 20px;
  background: transparent;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 1);
  box-shadow: 0 2px rgba(0, 0, 0, 1);
`;
export const LevelBarEffect = styled.div`
  position: absolute;
  top: 2px;
  left: 3px;
  right: 3px;
  height: 45%;
  background: rgba(255, 255, 255, 0.28);
  border-radius: 5px;
  z-index: 1;
`;
// Comment faire en sorte que la "width" LevelBarFilling change selon la variable  (remplisage de la LevelBar selon le niveau du joueur) ?
export const LevelBarFilling = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  /* width: ${({ level }) => {}}; */
  width: 50%;
  background: #007f9a;
  border-radius: 10px;
  z-index: 1;
`;
export const AvatarName = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  text-shadow: 2px 2px 3px #000;
  margin: 2px 0 0 15px;
`;
