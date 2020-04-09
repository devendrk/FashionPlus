import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./components/headeer/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopePage from "./pages/shop/shop-page.component";
import signIn from "./pages/signin-signup/signin-signup.component";
//action
import { setCurrentUser } from "./redux/user/user.actions";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import "./App.scss";

class App extends Component {
  unsuscribeFromAUth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsuscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsuscribeFromAUth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopePage} />
          <Route exact path="/signin" component={signIn} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(App);
