import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Home from "./Home";
import PageLink from "./PageLink";
import { fetchProducts } from "../redux/actions/cart";

const App = ({ fetchProducts }) => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          fetchProducts();
          return <Home />;
        }}
      />
      <Route exact path="/link/" component={PageLink} />
    </Switch>
  );
};

App.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
};

const mapDispatchToProps = { fetchProducts };

export default connect(
  null,
  mapDispatchToProps
)(App);
