import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/headeer/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopePage from "./pages/shop/shop-page.component";
import signIn from "./pages/signin-signup/signin-signup.component";

import { auth } from "./firebase/firebase.utils";
import "./App.scss";

export default class App extends Component {
  state = {
    currentUser: null,
  };

  unsuscribe = null;
  componentDidMount() {
    this.unsuscribe = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }
  componentWillUnmount() {
    this.unsuscribe();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopePage} />
          <Route exact path="/signin" component={signIn} />
        </Switch>
      </div>
    );
  }
}
