import { HeaderLeft, Languages, LineBetweenLanguage } from "../header/header.styled";
import { FooterItem, FooterList, FooterWrapper } from "./footer.styled";

export const Footer = () => {
  return (
    <>
      <FooterWrapper >
        <FooterList>
          <FooterItem href="#">News</FooterItem>
          <FooterItem href="#">Support</FooterItem>
          <FooterItem href="#">Investors</FooterItem>
          <FooterItem href="#">Confidence</FooterItem>
        </FooterList>

        <HeaderLeft>
        <Languages>EN</Languages>
        <LineBetweenLanguage />
        <Languages>RU</Languages>
      </HeaderLeft>
      </FooterWrapper>
    </>
  );
};
