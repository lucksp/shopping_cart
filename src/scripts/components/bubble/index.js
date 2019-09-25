import React from "react";
import PropTypes from "prop-types";
import { StyledBubble } from "./Bubble.css";

const Bubble = ({ text, className }) => {
  return <StyledBubble className={`flex ${className}`}>{text}</StyledBubble>;
};

Bubble.propTypes = {
  text: PropTypes.number.isRequired,
  className: PropTypes.string,
};

Bubble.defaultProps = {
  className: "",
};

export default Bubble;
