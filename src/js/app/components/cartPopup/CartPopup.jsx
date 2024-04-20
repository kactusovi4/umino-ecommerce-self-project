import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import CloseBtn from "../common/CLoseBtn";
import CartList from "./CartList";
import CartSubmit from "./CartSubmit";

const CartPopup = ({ inCart, products }) => {
  const popup = useRef();
  const productsInCart = products.filter((p) => inCart[p.id] > 0);
  console.log(productsInCart, inCart);
  let total = 0;

  useEffect(() => {
    total +=
      productsInCart.length > 0
        ? productsInCart.reduce((acc, p) => {
            console.log(typeof p.price, typeof inCart[p.id], total);
            return acc + p.price * inCart[p.id];
          })
        : 0;
  }, [inCart, productsInCart]);

  return (
    <div
      id="cart-popup"
      className="active popup-content translate-x-full fixed top-0 w-[90vw] h-screen right-0 z-[99] mobile:w-[450px] shadow-xl"
      ref={popup}
    >
      <CloseBtn popup={popup.current} pos="right-6 top-3" />
      {/* <!-- actual content --> */}
      <div className="size-full flex flex-col bg-white overflow-y-scroll">
        {/* <!-- title --> */}
        <div className="relative w-full px-6 py-4 text-[18px] font-normal">
          <h4>
            Shopping Cart (<span>0</span>)
          </h4>
        </div>
        {/* <!-- discount part  */}
        {/* TODO: add discount progressbar */}
        {/* --> */}
        <div className="bg-black bg-opacity-5 px-6 py-4 border-t-2 border-b-2">
          <span>
            Discount: <span className="text-page-red">$10.00</span>
          </span>
        </div>
        <CartList />
        <CartSubmit total={total} />
      </div>
    </div>
  );
};

CartPopup.propTypes = {};

export default CartPopup;
