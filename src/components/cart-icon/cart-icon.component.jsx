import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shoppingBag.svg";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";
import "./cart-icon.scss";

const CartIcon = ({ toggleCartDropdown, itemCount }) => {
  return (
    <div className="cart-icon " onClick={toggleCartDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchTOprops = (dispatch) => {
  return {
    toggleCartDropdown: () => dispatch(toggleCartDropdown()),
  };
};

const mapStateToProps = ({ cart: { cartItems } }) => {
  return {
    itemCount: cartItems.reduce((accumalteQuantiy, cartItem) => {
      return accumalteQuantiy + cartItem.quantity;
    }, 0),
  };
};
export default connect(mapStateToProps, mapDispatchTOprops)(CartIcon);
