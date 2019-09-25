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
  updateLocalStorage(id);
  return dispatch => {
    return dispatch({
      type: ActionTypes.PRODUCT_ADD,
      payload: { [id]: 1 },
    });
  };
}

export const updateCart = (value, id) => {
  return dispatch => {
    return dispatch({
      type: ActionTypes.PRODUCT_UPDATE,
      payload: { value, id },
    });
  };
};
const updateLocalStorage = id => {
  const storageName = "products";
  let copyOfStorage = localStorage.getItem(storageName);

  try {
    copyOfStorage = copyOfStorage.json();
  } catch (e) {
    copyOfStorage = {};
  }

  copyOfStorage[id] = copyOfStorage[id] ? copyOfStorage[id]++ : 1;

  localStorage.setItem(storageName, JSON.stringify(copyOfStorage));
};
