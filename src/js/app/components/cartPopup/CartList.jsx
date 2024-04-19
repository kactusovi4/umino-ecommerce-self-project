import React from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";

const CartList = (props) => {
  return (
    <div id="cart-container" className="flex flex-col gap-4 w-full px-5 py-4">
      <CartItem />
    </div>
  );
};

CartList.propTypes = {};

export default CartList;
