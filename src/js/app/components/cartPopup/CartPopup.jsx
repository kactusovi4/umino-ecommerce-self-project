import React, { useState, useRef, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import CloseBtn from "../common/CLoseBtn";
import CartList from "./CartList";
import CartSubmit from "./CartSubmit";
import { ShopContext } from "../../context/shop-context";

const CartPopup = () => {
  const popup = useRef();

  const { cartItems, products } = useContext(ShopContext);

  let subtotal = 0;
  for (let i = 0; i < products.length; i++) {
    subtotal += products[i].price * cartItems[products[i].id];
  }

  return (
    <>
      <div
        id="cart-popup"
        className=" popup-content translate-x-full fixed top-0 w-[90vw] h-screen right-0 z-[99] mobile:w-[450px] shadow-xl"
        ref={popup}
      >
        <CloseBtn popup={popup.current} pos="right-6 top-3" />
        {/* <!-- actual content --> */}
        <div className="size-full grid grid-rows-[auto_1fr_auto] bg-white ">
          {/* <!-- title --> */}
          <div>
            <div className="relative w-full px-6 py-4 text-[18px] font-normal">
              <h4>
                Shopping Cart (<span className="cart-counter">0</span>)
              </h4>
            </div>
            {/* discount part  */}
            {/* TODO: add discount progressbar */}
            <div className="bg-black bg-opacity-5 px-6 py-4 border-t-2 border-b-2">
              <span>
                Discount: <span className="text-page-red">$10.00</span>
              </span>
            </div>
          </div>
          <CartList />
          <CartSubmit total={subtotal} />
        </div>
      </div>
    </>
  );
};

CartPopup.propTypes = {};

export default CartPopup;
