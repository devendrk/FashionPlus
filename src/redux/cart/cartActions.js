import cartTypes from "./cartTypes";
import cartActionTypes from "./cartTypes";

export const toggleCartDropdown = () => {
  return { type: cartTypes.TOGGLE_CART_HIDDEN };
};

export const addItem = (item) => {
  return {
    type: cartActionTypes.ADD_ITEM,
    payload: item,
  };
};
