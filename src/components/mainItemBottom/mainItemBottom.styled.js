import styled from "styled-components";

export const MainTtem = styled.div`
  padding-right: 30px;
  margin: 30px 0;
  height: 820px;
  width: 1430px;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  `;

export const MainItemRight = styled.div`
  width: 680px;
  height: 400px;
  z-index: 3;
  transition: 2s;
  overflow: hidden;
  background-attachment: scroll;

  :hover {
    padding-right: 100px;
    width: 100%;
    height: 900px;
    z-index: 2;
    transition: 2s;


    img {
      margin: 0;
      transition: 2s ease-out;
    }

    div {
      position: absolute;
      top: 5%;
      left: 4%;
      color: white;
      opacity: 1;
      transition: 4s ease;
    }
  }
`;

export const MainItemImg = styled.img`
  margin: -180px 0 0 -135px;
  width: 1450px;
  height: auto;
  transition: ease 2s;
`;

export const MainItemContentRightHover = styled.div`
  max-width: 750px;
  opacity: 0;
`;

export const MainItemContentRightTitle = styled.h2`
  margin: 0;
  font-weight: 300;
  font-size: 240px;
  line-height: 240px;
  color: #ffffff;
`;

export const MainItemContentRightSubtitle = styled.h4`
  margin: 0 0 0 2%;
  font-weight: 300;
  font-size: 45px;
  line-height: 55px;
  color: #9e9e9e;
`;

export const MainItemContentRightDesc = styled.p`
  margin: 0 0 0 2%;
  font-weight: 300;
  font-size: 25px;
  line-height: 30px;
  color: white;
`;

export const MainItemContent = styled.div`
  position: absolute;
  top: 52%;
  left: 30%;
`;

export const MainItemTitle = styled.h2`
  text-align: center;
  margin: 0;
  font-weight: 300;
  font-size: 240px;
  line-height: 240px;
  color: #ffffff;
`;

export const MainItemSubtitle = styled.h4`
  margin: 0 0 0 2%;
  font-weight: 300;
  font-size: 45px;
  line-height: 55px;
  color: #9e9e9e;
`;
