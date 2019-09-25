// here we respond to a dispatch from an action item, then we return updated state to UI
import ActionTypes from "../actions/actionTypes";

const initialState = {
  loading: true,
  data: [],
  cart: {},
};

export default function data(state = state ? state : initialState, action) {
  switch (action.type) {
    case ActionTypes.PRODUCTS_GET:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.payload],
      };
    case ActionTypes.PRODUCT_ADD: {
      const id = Object.keys(action.payload)[0];

      let tempState = { ...state.cart };
      let count = tempState[id]
        ? tempState[id] + action.payload[id]
        : action.payload[id];

      return {
        ...state,
        cart: {
          ...state.cart,
          [id]: (state.cart[id] = count),
        },
      };
    }

    case ActionTypes.PRODUCT_UPDATE: {
      const { value, id } = action.payload;

      return {
        ...state,
        cart: {
          ...state.cart,
          [id]: value,
        },
      };
    }

    case ActionTypes.PRODUCTS_GET_CART_STORAGE:
      return {
        ...state,
        cart: action.payload,
      };
  }
  return state;
}
