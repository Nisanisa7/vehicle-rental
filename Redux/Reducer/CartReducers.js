import * as Types from "../types";
const initialState = {
  cart: [],
  totalPrice: 0,
  day: 0,
  quantity: 0,
};
const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_TO_CART:
    const item = action.payload;
      return {
        ...state,
        cart: [...state.cart, item],
        totalPrice:
          state.totalPrice + action.payload.price * action.payload.amount,
        quantity: state.quantity + action.payload.amount,
      };
    case 'EMPTY_CART':
      return {
        cart: [],
        totalPrice: 0,
        quantity: 0,
      };     
    default:
      return state;
  }
};

export default CartReducer
