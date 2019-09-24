import styled from "styled-components";
import { colorVars } from "../../GlobalStyle.css";
import Card from "../../components/card";

export const StyledProductList = styled.div`
  flex-flow: row wrap;
`;

export const StyledProductCard = styled(Card)`
  flex: 1 0 21%;
  margin: 16px;
  @media (max-width: 768px) {
    flex: 1 0 42%;
  }

  .card-title {
    text-transform: capitalize;
    font-weight: bold;
    color: ${colorVars.dark_blu};
  }

  .description {
    font-size: 18px;
    margin: 8px 0;
  }
`;
