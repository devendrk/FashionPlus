import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shoppingBag.svg";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";

import { selectCartItemsCount } from "../../redux/cart/cart.selector";

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

const mapStateToProps = (state) => {
  return {
    itemCount: selectCartItemsCount(state),
  };
};
export default connect(mapStateToProps, mapDispatchTOprops)(CartIcon);
