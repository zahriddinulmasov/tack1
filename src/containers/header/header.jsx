import { useTranslation } from "react-i18next";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

import { NavItem } from "../../components/navItem/navItem";
import { NavList } from "../../components/navList/navList";

import {
  HeaderBtns,
  HeaderLeft,
  HeaderRight,
  HeaderWrapper,
  Languages,
  LineBetweenBtns,
  LineBetweenLanguage,
  StyledBadge,
} from "./header.styled";

export const Header = () => {
  const { t, i18n } = useTranslation();

  const chooseLanguages = (evt) => {
    i18n.changeLanguage(evt.target.textContent);
  };

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <Languages onClick={chooseLanguages}>EN</Languages>
        <LineBetweenLanguage />
        <Languages onClick={chooseLanguages}>RU</Languages>
      </HeaderLeft>

      <NavList>
        <NavItem to="/" title={t("nav.models")} />
        <NavItem to="/company" title={t("nav.company")} />
        <NavItem to="/main" title={t("nav.main")} />
        <NavItem to="/contacts" title={t("nav.contact")} />
        <NavItem to="/help-support" title={t("nav.helpSupport")} />
        <NavItem to="/3droom" title={t("nav.room")} />
      </NavList>

      <HeaderRight>
        <HeaderBtns>
          <StyledBadge badgeContent={7} color="secondary">
            <AddShoppingCartIcon />
          </StyledBadge>
        </HeaderBtns>

        <LineBetweenBtns />

        <HeaderBtns>
          <PermIdentityIcon />
        </HeaderBtns>
      </HeaderRight>
    </HeaderWrapper>
  );
};
