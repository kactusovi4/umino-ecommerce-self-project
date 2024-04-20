import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../../context/shop-context";
import { toast, ToastContainer } from "react-toastify";

const CartItem = ({ p }) => {
  const { removeFromCart, addToCart, cartItems } = useContext(ShopContext);
  return (
    <>
      <ToastContainer />
      <div className="cart-item flex gap-4 py-4">
        {/* <!-- img --> */}
        <div className="rounded-md overflow-hidden min-w-[116px]">
          <img
            src={p.images[0]}
            alt="product-in-cart"
            className="object-cover min-w-[116px] max-w-[116px] max-h-full h-full"
          />
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
                {/* counter */}
                <div>
                  <button onClick={() => removeFromCart(p.id)}>
                    <span className="icon-minus"></span>
                  </button>
                </div>
                <div>
                  <span className="couner-val text-[14px]">
                    {cartItems[p.id]}
                  </span>
                </div>
                <div>
                  <button
                    onClick={() => {
                      toast.success("Added to cart");
                      console.log("xd");
                      addToCart(p.id);
                    }}
                  >
                    <span className="icon-plus"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

CartItem.propTypes = {};

export default CartItem;
