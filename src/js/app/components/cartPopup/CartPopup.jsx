import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import CloseBtn from "../common/CLoseBtn";
import CartList from "./CartList";

const CartPopup = (props) => {
  const popup = useRef();
  useEffect(() => {
    console.log(popup.current);
  }, []);
  return (
    <div
      id="cart-popup"
      className="popup-content translate-x-full fixed top-0 w-[90vw] h-screen right-0 z-[99] mobile:w-[450px]"
      ref={popup}
    >
      <CloseBtn popup={popup.current} />
      {/* <!-- actual content --> */}
      <div className="size-full flex flex-col bg-white overflow-y-scroll">
        {/* <!-- title --> */}
        <div className="relative w-full px-5 py-4 text-[18px] font-medium">
          <h4>
            Shopping Cart (<span>0</span>)
          </h4>
        </div>
        {/* <!-- discount part  */}
        {/* TODO: add discount progressbar */}
        {/* --> */}
        <div className="bg-black bg-opacity-5 px-5 py-4 border-t-2 border-b-2">
          <span>
            Discount: <span className="text-page-red">$10.00</span>
          </span>
        </div>
        <CartList />
      </div>
    </div>
  );
};

CartPopup.propTypes = {};

export default CartPopup;
