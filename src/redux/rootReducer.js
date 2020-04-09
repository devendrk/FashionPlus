import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
import CartReducer from "./cart/cartReducer";

export default combineReducers({
  user: userReducer,
  cart: CartReducer,
});
