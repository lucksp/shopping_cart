import styled from "styled-components";
import { colorVars } from "../../GlobalStyle.css";

export const StyledButton = styled.button`
  padding: 4px 8px;
  border: 1px solid;
  margin: 0px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  color: ${colorVars.gray};
  background-color: ${colorVars.fuscia};
  height: inherit;
  width: 80px;
  cursor: pointer;
`;
