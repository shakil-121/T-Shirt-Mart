import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  const { name } = cart;
  let message;
  if (cart.length === 0) {
    message = <p>Add some products</p>;
  }
  return (
    <div>
      <h3>Order summary:{cart.length}</h3>
      {message}
      {cart.map((tshart) => (
        <p key={tshart._id}>
          {tshart.name}
          <button onClick={() => handleRemoveFromCart(tshart._id)}>
            <FontAwesomeIcon className="delete-icon" icon={faDeleteLeft} />
          </button>
        </p>
      ))}
    </div>
  );
};

export default Cart;

/**
 * conditional rendering
 *
 */
