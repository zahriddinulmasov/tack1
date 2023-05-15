import styled from "styled-components";

export const FooterWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ffffff;
`;

export const FooterList = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 460px;
  width: 100%;
`;

export const FooterItem = styled.a`
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.09em;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
`;
