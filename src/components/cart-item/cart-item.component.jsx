import React from "react";
import "./cart-item.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-detils">
        <span className="name">{name}</span>
        <span className="price">
          {quantity}X{price}€{" "}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
