import { useTranslation } from "react-i18next";

import {
  HeaderLeft,
  Languages,
  LineBetweenLanguage,
} from "../header/header.styled";

import { FooterItem, FooterList, FooterWrapper } from "./footer.styled";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <FooterWrapper>
        <FooterList>
          <FooterItem href="#">{t("footerNav.new")}</FooterItem>
          <FooterItem href="#">{t("footerNav.support")}</FooterItem>
          <FooterItem href="#">{t("footerNav.investor")}</FooterItem>
          <FooterItem href="#">{t("footerNav.confidence")}</FooterItem>
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
