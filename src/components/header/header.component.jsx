import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import { ReactComponent as Logo } from "../../assetes/crown.svg";

import "./header.styles.scss";
function Header({ currentUser }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin">SIGN IN</Link>
        )}
        <CartIcon />
      </div>
        <CartDropDown />
    </div>
  );
}
// state is top lovel root reducer or the main state (single source of truth)
const mapStateToprops = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToprops)(Header);
