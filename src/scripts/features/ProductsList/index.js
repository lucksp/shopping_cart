import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import Card from "../../components/card";
import { StyledProductList, StyledProductCard } from "./ProductList.css";

const ProductsList = ({ products }) => {
  return (
    <StyledProductList className="flex">
      {products.map(product => {
        return (
          <StyledProductCard key={product.id} className="card-product">
            <div className="card-title">{product.title}</div>
            <div className="card-body">
              <button className="" type="button"></button>
              <div className="right">${product.price}</div>
              <div>{product.description}</div>
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
};

const mapStateToProps = state => {
  return {
    products: state.products.data,
  };
};

export default connect(mapStateToProps)(ProductsList);
