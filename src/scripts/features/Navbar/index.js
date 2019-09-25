import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import PopOver from "./PopOver";

import { StyledNavbar, CartBubble } from "./Navbar.css";

const NavBar = ({ cartCounter }) => {
  const [isCartOpen, setCartOpen] = useState(true);

  return (
    <StyledNavbar className="flex">
      <div>Shop At Geo-Pardy</div>
      <div
        id="wrapper-counter"
        className="flex"
        onClick={() => setCartOpen(!isCartOpen)}
      >
        🛒
        <CartBubble text={cartCounter} className="bubble-cart" />
      </div>
      <PopOver isOpen={isCartOpen} />
    </StyledNavbar>
  );
};

NavBar.propTypes = {
  cartCounter: PropTypes.number.isRequired,
};

const mapStateToProps = state => {
  return {
    cartCounter: Object.keys(state.products.cart).length || 0,
  };
};

export default connect(mapStateToProps)(NavBar);
