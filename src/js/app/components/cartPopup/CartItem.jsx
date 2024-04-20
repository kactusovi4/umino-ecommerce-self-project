import React from "react";
import PropTypes from "prop-types";

const CartItem = ({ p }) => {
  return (
    <div className="cart-item flex gap-4">
      {/* <!-- img --> */}
      <div className="w-[87px] h-[116px] rounded-md overflow-hidden">
        <img src={p.images[0]} alt="product" />
      </div>
      {/* <!-- text --> */}
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <a className="hover:opacity-60 transition-all" href="#">
            {p.title}
          </a>
          <span className="text-gray-600 text-sm">{p.category.name}</span>
          <div className="flex flex-col gap-4 h-full">
            <div className="font-medium">
              <span className="final-price text-page-red">${p.price}</span>
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
