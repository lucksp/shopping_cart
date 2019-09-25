import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { StyledPopOver } from "./PopOver.css";

const PopOver = ({ isOpen, emptyCart }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <StyledPopOver>
      <div className="popover-body">
        {emptyCart && <div>Please add items to your cart</div>}
      </div>
    </StyledPopOver>
  );
};

PopOver.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  emptyCart: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    emptyCart: Object.keys(state.products.cart).length < 1,
  };
};
export default connect(mapStateToProps)(PopOver);
