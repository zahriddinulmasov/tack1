import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderNavItem = styled.li`
  margin: 0 7px;
`;

export const HeaderNavItemLink = styled(NavLink)`
  padding: 10px 5px;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  text-decoration: none;

  :hover{
  color: whitesmoke;
  }
`;
