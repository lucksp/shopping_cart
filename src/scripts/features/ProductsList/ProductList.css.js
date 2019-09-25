import styled from "styled-components";
import { colorVars } from "../../GlobalStyle.css";
import Card from "../../components/card";
import Button from "../../components/button";

export const StyledProductList = styled.div`
  flex-flow: row wrap;
`;

export const StyledProductCard = styled(Card)`
  flex: 1 0 21%;
  margin: 16px;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex: 1 0 42%;
  }

  .card-title {
    text-transform: capitalize;
    width: 100%;
    text-align: center;
    margin-bottom: 8px;
    font-weight: bold;
    color: ${colorVars.dark_blu};
  }

  .description {
    font-size: 18px;
    margin: 8px 0;
  }
`;

export const AddToCartButton = styled(Button)`
  width: 100%;
  padding: 8px 16px;
`;
