import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./button.css";

const Button = props => {
  const { type, handleClick, value, className } = props;

  return (
    <StyledButton type={type} onClick={handleClick} className={className}>
      {value}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
  className: "",
};

export default Button;
