import { SiteNavList } from "./navList.styled";

export const NavList = ({ children }) => {
  return (
    <>
      <SiteNavList>
        {children}
      </SiteNavList>
    </>
  );
};
