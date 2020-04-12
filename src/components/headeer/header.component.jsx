import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown";

import { selectCartDropdown } from "../../redux/cart/cart.selector";
import { currentUser, selectCurrentUser } from "../../redux/user/user.selector";

import "./header.scss";

export const Header = ({ currentUser, toggleCartDropdown }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!toggleCartDropdown ? <CartDropdown /> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
    toggleCartDropdown: selectCartDropdown(state),
  };
};

export default connect(mapStateToProps)(Header);
