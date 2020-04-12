import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckOutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const PublishableKey = "pk_test_EMCw2tA7MAcwNF9n2Jzk9ljf00AhPJJtSO";
  const onToken = (token) => {
    alert("payment successful");
  };
  return (
    <StripeCheckout
      label="Pay now"
      name=" fashion plus"
      shippingAddress
      description={`Your total is ${priceForStripe}€ `}
      pannelLabel="Pay now"
      token={onToken}
      stripeKey={PublishableKey}
    />
  );
};

export default StripeCheckOutButton;
