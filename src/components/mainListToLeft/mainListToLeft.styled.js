import styled from "styled-components";

export const MainTtem = styled.div`
  padding-left: 50px;
  margin: 30px 0;
  height: 820px;
  width: 1350px;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: row-reverse;
`;

export const MainItemRight = styled.div`
  /* margin: 40px 0; */
  width: 680px;
  height: 400px;
  z-index: 3;
  transition: 2s;
  overflow: hidden;
  background-attachment: scroll;

  :hover {
    width: 100%;
    height: 900px;
    z-index: 2;

    img {
      margin: 0;
      transition: 2s ease-out;
    }

    div {
      position: absolute;
      top: 5%;
      left: 8%;
      color: white;
      transition:  3s ease;
      opacity: 1;
    }
  }
`;

export const MainItemImg = styled.img`
  margin: -180px 0 0 -135px;
  width: 1363px;
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
  top: 28%;
  left: 5%;
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
