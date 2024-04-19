import React from "react";
import PropTypes from "prop-types";

const CartItem = (props) => {
  return (
    <div className="cart-item flex gap-4">
      {/* <!-- img --> */}
      <div className="w-[87px] h-[116px] rounded-md overflow-hidden">
        <img
          src="i/fashion_products_22_1_35bfb1ff-ba53-4183-8165-40ad7779a8a7.webp"
          alt=""
        />
      </div>
      {/* <!-- text --> */}
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <a className="hover:opacity-60 transition-all" href="#">
            Square Textured Striped
          </a>
          <span className="text-gray-600 text-sm">Green</span>
          <div className="flex flex-col gap-4 h-full">
            <div className="font-medium">
              <span className="final-price text-page-red">$115.00 </span>
              <span className="text-gray-600 line-through">$180.00</span>
            </div>
            <div className="flex bg-gray-100 px-2 w-fit rounded-full border-2 gap-4 text-gray-600 text-center">
              <div>
                <button className="couner-dec">
                  <span className="icon-minus"></span>
                </button>
              </div>
              <div>
                <span className="couner-val text-[14px]">1</span>
              </div>
              <div>
                <button className="couner-inc">
                  <span className="icon-plus"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {};

export default CartItem;
