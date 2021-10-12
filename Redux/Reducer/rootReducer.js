import { combineReducers } from "redux"
import CartReducer from "./CartReducers";
import AdminReducer  from "./AdminReducer";
import CustommerReducer from "./CustommerReducer";
import OrderReducer from "./OrderReducer";


const rootReducer = combineReducers({
  custommer: CustommerReducer,
  Admin: AdminReducer,
  cartItem: CartReducer,
  Order: OrderReducer,
})

export default rootReducer;