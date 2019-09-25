import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import Card from "../../components/card";
import {
  StyledProductList,
  StyledProductCard,
  AddToCartButton,
} from "./ProductList.css";
import { addItemToCart } from "../../redux/actions/products";

const ProductsList = ({ products, addItemToCart }) => {
  return (
    <StyledProductList className="flex">
      {products.map(product => {
        return (
          <StyledProductCard key={product.id} className="flex card-product">
            <div className="card-title">{product.title}</div>
            <div className="card-body">
              <div className="">${product.price}</div>
              <div className="description">{product.description}</div>
            </div>
            <AddToCartButton
              className="button-add"
              value="Add To Cart"
              handleClick={() => addItemToCart(product.id)}
            />
          </StyledProductCard>
        );
      })}
    </StyledProductList>
  );
};

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  addItemToCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    products: state.products.data,
  };
};

const mapDispatchToProps = { addItemToCart };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList);
