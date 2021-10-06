import Swal from "sweetalert2";
import * as Types from "../types";

export const addCart = (data, amount) => async (dispatch, getState) => {
  const cartData = { ...data, amount: amount};
  dispatch({ type: Types.ADD_TO_CART, payload: cartData });
  localStorage.setItem("Cart", getState().cartItem.cart);
  // Swal.fire("Success!", "item has been added to cart!", "success");
};
