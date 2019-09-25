import React from "react";
import PropTypes from "prop-types";
import { StyledCard } from "./card.css";

const Card = props => {
  const { className } = props;
  return (
    <StyledCard className={`card ${className}`}>{props.children}</StyledCard>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element.isRequired),
};

Card.defaultProps = {
  className: "",
};

export default Card;
