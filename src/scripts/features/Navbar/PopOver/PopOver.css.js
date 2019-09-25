import styled from "styled-components";
import { colorVars } from "../../../GlobalStyle.css";

export const StyledPopOver = styled.div`
  position: absolute;
  background-color: ${colorVars.off_white};
  top: 60px;
  right: 16px;
  padding: 24px;
  max-width: 40%;
  width: 40%;
  box-shadow: 1px 4px 6px ${colorVars.dark_blu};
  font-size: 16px;

  .popover-body {
    position: relative;

    .flex {
      justify-content: space-between;
    }

    .cart-item {
      &:not(:last-of-type) {
        margin-bottom: 8px;
      }
    }

    .cart-title {
      text-transform: capitalize;
    }

    .cart-input {
      border: 1px solid ${colorVars.fuscia};
      padding: 4px;
    }

    .cart-total {
      margin-top: 8px;
      text-align: right;
    }
    &:before {
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
  }
`;
