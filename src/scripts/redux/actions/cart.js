// here we respond to an action from the UI, process, and dispatch results to handled in reducer
import ActionTypes from "./actionTypes";

export function fetchProducts() {
  return function(dispatch) {
    return fetch(`/api/data`)
      .then(response => response.json())
      .then(data => {
        return dispatch({
          type: ActionTypes.PRODUCTS_GET,
          payload: data,
        });
      });
  };
}
