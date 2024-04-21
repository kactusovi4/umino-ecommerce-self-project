import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { LiaShippingFastSolid } from "react-icons/lia";

const CartTitle = ({ subtotal }) => {
  const progressBar = useRef();

  useEffect(() => {
    if (subtotal < 100) {
      progressBar.current.style.width = `${subtotal}%`;
    } else {
      progressBar.current.style.width = "100%";
    }
  }, [subtotal]);

  return (
    <div>
      <div className="relative w-full px-6 py-4 text-[18px] font-normal">
        <h4>
          Shopping Cart (<span className="cart-counter">0</span>)
        </h4>
      </div>
      {/* discount part  */}
      {/* TODO: add discount progressbar */}
      <div className="relative bg-black bg-opacity-5 px-6 py-4 border-t-2 border-b-2 flex flex-col gap-4">
        <div className="w-[calc(100%-48px)] absolute left-6 h-[5px] bg-gray-400 bg-opacity-55"></div>
        <div
          className="relative h-[5px] bg-page-red rounded-[4px] transition-all overflow-visible"
          ref={progressBar}
        >
          {/* <div className="absolute top-0 right-0 h-full bg-page-red rounded-full translate-y-[-50%] size-[30px]">
            <LiaShippingFastSolid />
          </div> */}
        </div>
        {+subtotal <= 100 ? (
          <span>
            Spend ${100 - +subtotal}.00 more to enjoy
            <span className="text-page-red"> FREE SHIPPING!</span>
          </span>
        ) : (
          <span>Congratulations! You've got free shipping!</span>
        )}
      </div>
    </div>
  );
};

CartTitle.propTypes = {};

export default CartTitle;
