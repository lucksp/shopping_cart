import { createGlobalStyle } from "styled-components";

export const colorVars = {
  teal: "#33A9AC",
  yellange: "#FFA646",
  orange: "#F86041",
  fuscia: "#982062",
  dark_blu: "#343779",
  almost_black: "#273240",
  gray: "#98B5BE",
};

export const GlobalStyle = createGlobalStyle`
@import url(‘https://fonts.googleapis.com/css?family=Roboto');
body{
    font-family: "Roboto", Arial, sans-serif;
    height: 100vh;
    max-height: 100vh;
    width: 100vw;
    max-width: 100vw;
    margin: 0;
    font-size: 22px;
    color: #000;
}
#root {
    height: inherit;
    width: inherit;
}

.flex {
  display: flex;
}

.right {
  float: right;
}
`;
