// here we respond to an action from the UI, process, and dispatch results to handled in reducer
import ActionTypes from "./actionTypes";
import { fetchWrapper } from "../../api/FetchWrapper";

export function fetchProducts() {
  return async dispatch => {
    const data = await fetchWrapper(`/api/data`);

    return dispatch({
      type: ActionTypes.PRODUCTS_GET,
      payload: data,
    });
  };
}

export function addItemToCart(id) {
  return (dispatch, state) => {
    dispatch({
      type: ActionTypes.PRODUCT_ADD,
      payload: { [id]: 1 },
    });

    const updatedState = state().products.cart;
    updateLocalStorage(updatedState);
  };
}

export const updateCart = (value, id) => {
  return (dispatch, state) => {
    dispatch({
      type: ActionTypes.PRODUCT_UPDATE,
      payload: { value, id },
    });
    const updatedState = state().products.cart;
    updateLocalStorage(updatedState);
  };
};
const updateLocalStorage = cartState => {
  const storageName = "products";

  localStorage.setItem(storageName, JSON.stringify(cartState));
};

export const checkForCartStorage = () => {
  const existingCartStorage = JSON.parse(
    localStorage.getItem("products") || "{}"
  );
  return dispatch => {
    return dispatch({
      type: ActionTypes.PRODUCTS_GET_CART_STORAGE,
      payload: existingCartStorage,
    });
  };
};
