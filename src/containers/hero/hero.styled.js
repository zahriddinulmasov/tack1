import styled from "styled-components";

import backgroundHero from "../../assets/images/backHero.png"

export const SiteNameWrapper = styled.div`
padding: 60px 0;
background-image: url(${backgroundHero}) ;
background-repeat: no-repeat ;
background-size: 600px 340px ;
background-position: 74% 31%;
height: 650px;
`;

export const SiteTitle = styled.h1`
  margin: 0;
  text-align: center;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 325px;
  line-height: 390px;
  color: #ffffff;
  text-shadow: 0px 10px 30px rgba(0, 0, 0, 0.25);
`;

export const SiteSubtitle = styled.h2`
  margin: 0 0 0 19%;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 128px;
  line-height: 154px;
  color: #ffffff;
`;
