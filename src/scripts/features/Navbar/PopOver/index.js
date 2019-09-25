import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { StyledPopOver } from "./PopOver.css";
import { getCartItems } from "../../../redux/reducers/selectors";
import { updateCart } from "../../../redux/actions/products";

const PopOver = ({ isOpen, emptyCart, cartItems, updateCart }) => {
  const [cartTotal, setCartTotal] = useState(null);

  let total = 0;
  useEffect(() => {
    if (cartItems) {
      cartItems.forEach(item => {
        total += item.quantity * item.price;
      });
      setCartTotal(total.toFixed(2));
    }
  }, [cartItems]);

  const handleChange = (e, id) => {
    const { value } = e.target;

    updateCart(parseInt(value), id);
  };
  if (!isOpen) {
    return null;
  }

  return (
    <StyledPopOver>
      <div className="popover-body">
        {emptyCart ? (
          <div>Please add items to your cart</div>
        ) : (
          cartItems.map((item, i) => {
            return (
              <div key={i} className="flex">
                <div>{item.title}</div>
                <input
                  value={item.quantity}
                  type="number"
                  size="4"
                  onChange={e => handleChange(e, item.id)}
                  min="0"
                />
              </div>
            );
          })
        )}
        {cartTotal > 0 && <div>Your Total: ${cartTotal}</div>}
      </div>
    </StyledPopOver>
  );
};

PopOver.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  emptyCart: PropTypes.bool.isRequired,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number,
    })
  ),
  updateCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const emptyCart = Object.keys(state.products.cart).length < 1;

  return {
    emptyCart,
    cartItems: !emptyCart ? getCartItems(state) : null,
  };
};

const mapDispatchToProps = { updateCart };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopOver);
