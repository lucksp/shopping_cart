import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const ProductsList = ({ products }) => {
  return (
    <div>
      {products.map((product, i) => {
        return <div key={i}>{product.title}</div>;
      })}
    </div>
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
