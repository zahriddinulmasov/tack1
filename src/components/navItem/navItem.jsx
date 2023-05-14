import { HeaderNavItem, HeaderNavItemLink } from "./navItem.styled";

export const NavItem = ({ title, to }) => {
  return (
    <>
      <HeaderNavItem>
        <HeaderNavItemLink to={to}>{title}</HeaderNavItemLink>
      </HeaderNavItem>
    </>
  );
};
