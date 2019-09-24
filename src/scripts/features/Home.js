import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchProducts } from "../redux/actions/products";
import ProductsList from "./ProductsList";

const Home = ({ loading, fetchProducts }) => {
  const fetchProductData = async () => {
    await fetchProducts();
  };
  useEffect(() => {
    fetchProductData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <main>
      <div>
        <nav>Shop at GeoParty</nav>
      </div>
      <ProductsList />
    </main>
  );
};

Home.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    loading: state.products.loading,
  };
};

const mapDispatchToProps = {
  fetchProducts,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
