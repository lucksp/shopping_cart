import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import Card from "../../components/card";
import { StyledProductList, StyledProductCard } from "./ProductList.css";
import Button from "../../components/button";
import { addItemToCart } from "../../redux/actions/products";

const ProductsList = ({ products, addItemToCart }) => {
  return (
    <StyledProductList className="flex">
      {products.map(product => {
        return (
          <StyledProductCard key={product.id} className="card-product">
            <div className="card-title">{product.title}</div>
            <div className="card-body">
              <Button
                className=""
                value="Add To Cart"
                handleClick={() => addItemToCart(product.id)}
              ></Button>
              <div className="right">${product.price}</div>
              <div className="description">{product.description}</div>
            </div>
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
