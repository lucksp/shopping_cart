import styled from "styled-components";
import { colorVars } from "../../GlobalStyle.css";

export const StyledBubble = styled.div`
  border-radius: 50%;
  height: 24px;
  width: 24px;
  font-size: 12px;
  line-height: 24px;
  background-color: ${colorVars.teal};
  color: ${colorVars.fuscia};
  align-items: center;
  justify-content: center;
`;
