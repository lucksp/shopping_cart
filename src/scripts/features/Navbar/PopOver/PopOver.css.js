import styled from "styled-components";

export const StyledPopOver = styled.div`
  position: absolute;
  background-color: gray;
  top: 60px;
  right: 16px;
  padding: 24px;
  max-width: 40%;

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
    border-bottom-color: gray;
    border-width: 16px;
    margin-left: -16px;
  }
`;
