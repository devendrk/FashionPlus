import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
import CartReducer from "./cart/cartReducer";
import directoryReducer from "./directory/directory.reducer";

export default combineReducers({
  user: userReducer,
  cart: CartReducer,
  directoryReducer,
});
