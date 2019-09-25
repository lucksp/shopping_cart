import styled from "styled-components";
import { colorVars } from "../../../GlobalStyle.css";

export const StyledPopOver = styled.div`
  position: absolute;
  background-color: ${colorVars.off_white};
  top: 60px;
  right: 16px;
  padding: 24px;
  max-width: 40%;
  box-shadow: 1px 4px 6px ${colorVars.dark_blu};

  .popover-body {
    position: relative;
    padding: 40px;
  }
  .popover-body:before {
    top: -50px;
    right: -22px;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: ${colorVars.off_white};
    border-width: 16px;
    margin-left: -16px;
  }
`;
