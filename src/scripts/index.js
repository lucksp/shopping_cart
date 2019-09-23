/* eslint-disable react/no-render-return-value */
import React from "react";
import ReactDOM from "react-dom";
import App from "./features/App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle.css";

const render = App =>
  ReactDOM.render(
    <React.Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.Fragment>,
    document.getElementById("root")
  );

render(App);
// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept();
  const NextApp = require("./features/App").default;
  render(NextApp);
}
