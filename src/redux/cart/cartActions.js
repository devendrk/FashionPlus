import cartTypes from "./cartTypes";

export const toggleCartDropdown = () => {
  return { type: cartTypes.TOGGLE_CART_HIDDEN };
};
