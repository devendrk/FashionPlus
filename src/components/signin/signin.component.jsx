import React, { Component } from "react";
import FormInput from "../form-input/formInput.component";
import CustomButton from "../button/Button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./signin.styles.scss";

export default class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  onhandleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form>
          <FormInput
            handleChange={this.onhandleChange}
            type="email"
            name="email"
            label="email"
            required
            value={this.state.email}
          />
          <FormInput
            handleChange={this.onhandleChange}
            type="password"
            name="password"
            label="password"
            required
            value={this.state.password}
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
