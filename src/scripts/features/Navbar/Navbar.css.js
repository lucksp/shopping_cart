import styled from "styled-components";
import { colorVars } from "../../GlobalStyle.css";
import Bubble from "../../components/bubble";

export const StyledNavbar = styled.nav`
  height: 48px;
  box-shadow: 0px -1px 4px 2px #98b5be;
  padding: 8px 24px;
  background-color: ${colorVars.yellange};
  color: ${colorVars.almost_black};
  align-items: center;
  justify-content: space-between;

  #wrapper-counter {
    justify-content: center;
    align-items: center;
  }
`;

export const CartBubble = styled(Bubble)`
  cursor: pointer;
`;
