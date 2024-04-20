import React from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";

const CartList = () => {
  const product = {
    id: 4,
    title: "Handmade Fresh Table",
    price: 687,
    description: "Andy shoes are designed to keeping in...",
    category: {
      id: 5,
      name: "Others",
      image: "https://placeimg.com/640/480/any?r=0.591926261873231",
    },
    images: [
      "i/fashion_products_22_1_35bfb1ff-ba53-4183-8165-40ad7779a8a7.webp",
      "https://placeimg.com/640/480/any?r=0.9300320592588625",
      "https://placeimg.com/640/480/any?r=0.8807778235430017",
    ],
  };

  return (
    <div id="cart-container" className="flex flex-col gap-4 w-full px-6 py-4">
      <CartItem p={product} />
    </div>
  );
};

CartList.propTypes = {};

export default CartList;
