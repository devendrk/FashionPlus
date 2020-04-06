import React from "react";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signin/sign-up.component";
import "./signin-and-signup.component.styles.scss";
function SignInandSignup() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInandSignup;
