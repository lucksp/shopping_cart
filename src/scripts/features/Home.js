import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchProducts, checkForCartStorage } from "../redux/actions/products";
import ProductsList from "./ProductsList";
import NavBar from "./Navbar";
import { StyledHome } from "./Home.css";

const Home = ({ loading, fetchProducts, checkForCartStorage }) => {
  const fetchProductData = async () => {
    await fetchProducts();
  };
  useEffect(() => {
    fetchProductData();
  }, []);

  useEffect(() => {
    checkForCartStorage();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <StyledHome>
      <NavBar />
      <main>
        <ProductsList />
      </main>
    </StyledHome>
  );
};

Home.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  checkForCartStorage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    loading: state.products.loading,
  };
};

const mapDispatchToProps = {
  fetchProducts,
  checkForCartStorage,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
