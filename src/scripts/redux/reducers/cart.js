// here we respond to a dispatch from an action item, then we return updated state to UI
import ActionTypes from "../actions/actionTypes";

const initialState = {
  products: [],
};

export default function data(state = state ? state : initialState, action) {
  switch (action.type) {
    case ActionTypes.PRODUCTS_GET:
      return state;
  }
  return state;
}
