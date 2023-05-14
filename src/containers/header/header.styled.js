import styled from "styled-components";

import { Button, IconButton } from "@mui/material";
import Badge from "@mui/material/Badge";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div`
  display: flex;
`;

export const Languages = styled(Button)`
  font-family: "Roboto" !important;
  width: 35px !important;
  color: white !important;

  :hover {
    color: whitesmoke !important;
    border-radius: 20px;
  }
`;
export const LineBetweenLanguage = styled.span`
  border: 1px solid #7a7a7a;
`;

export const HeaderRight = styled.div`
  height: 35px;
  display: flex;
`;

export const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 20,
    border:" 2px solid white",
    padding: "0 4px",
  },
}));

export const HeaderBtns = styled(IconButton)`
  margin: 0 12px !important;
  color: white !important;

  :hover {
    color: whitesmoke !important;
  }
`;

export const LineBetweenBtns = styled.span`
  border: 1px solid white;
`;
