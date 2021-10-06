import { combineReducers } from "redux"
import AdminReducer  from "./AdminReducer";
import CartReducer from "./CartReducers";
import CustommerReducer from "./CustommerReducer";
import OrderReducer from "./OrderReducer";


const rootReducer = combineReducers({
  // admin: AdminReducer,
  custommer: CustommerReducer,
  cartItem: CartReducer,
  Order: OrderReducer
})

export default rootReducer;