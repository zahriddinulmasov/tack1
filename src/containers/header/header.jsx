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

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <Languages>EN</Languages>
        <LineBetweenLanguage />
        <Languages>RU</Languages>
      </HeaderLeft>

      <NavList>
        <NavItem to="/" title="Модели" />
        <NavItem to="/company" title="О компании" />
        <NavItem to="/main" title="Главная" />
        <NavItem to="/contacts" title="Контакты" />
        <NavItem to="/help-support" title="Помощь и поддрежка" />
        <NavItem to="/3droom" title="3D Комната" />
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
