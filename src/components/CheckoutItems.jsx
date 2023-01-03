import React from "react";
import { useStateValue } from "../StateProvider";
import "./CheckoutItems.css";

const CheckoutItems = ({ title, price, rating, image }) => {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      title: title,
    });
  };

  return (
    <div className="checkoutitem">
      <img className="item_image" src={image} />
      <div className="item_info">
        <p className="item_title">{title}</p>
        <p className="item_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="item_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
};

export default CheckoutItems;
