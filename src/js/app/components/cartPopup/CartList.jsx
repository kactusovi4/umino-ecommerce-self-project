import React, { useContext } from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";
import { ShopContext } from "../../context/shop-context";

const CartList = () => {
  const { products, cartItems } = useContext(ShopContext);

  return (
    <div
      id="cart-container"
      className="flex flex-col w-full px-6 py-4 divide-y-2 divide-dotted overflow-y-scroll"
    >
      {products.map((product) => {
        if (cartItems[product.id] > 0) {
          return <CartItem key={product.id} p={product} />;
        }
      })}
    </div>
  );
};

CartList.propTypes = {};

export default CartList;
