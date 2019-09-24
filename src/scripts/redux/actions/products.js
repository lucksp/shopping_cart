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
