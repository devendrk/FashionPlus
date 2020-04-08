import React, { Component } from "react";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";

import "./signin-signup.scss";

export default class SigninAndSignup extends Component {
  render() {
    return (
      <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
      </div>
    );
  }
}
