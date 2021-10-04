import { combineReducers } from "redux"
import AdminReducer  from "./AdminReducer";
import CustommerReducer from "./CustommerReducer";


const rootReducer = combineReducers({
  // admin: AdminReducer,
  custommer: CustommerReducer
})

export default rootReducer;