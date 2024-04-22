import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../../context/shop-context";
import { toast, ToastContainer } from "react-toastify";
import { IoTrashBinOutline } from "react-icons/io5";

const CartItem = ({ p }) => {
  const { removeFromCart, addToCart, cartItems, updateInCart, deleteFromCart } =
    useContext(ShopContext);

  const [isConfirmation, setIsConfirmation] = useState(false);

  return (
    <>
      <div className="cart-item flex gap-4 py-4 relative">
        {/* <!-- img --> */}
        <div className="rounded-md overflow-hidden min-w-[116px]">
          <img
            src={p.images[0]}
            alt="product-in-cart"
            className="object-cover min-w-[116px] max-w-[116px] max-h-full h-full"
          />
        </div>
        {/* <!-- text --> */}
        {!isConfirmation ? (
          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              <a className="hover:opacity-60 transition-all" href="#">
                {p.title}
              </a>
              <span className="text-gray-600 text-sm">{p.category.name}</span>
              <div className="flex flex-col gap-4 h-full relative">
                <div className="font-medium">
                  <span className="final-price text-page-red">${p.price}</span>
                </div>
                <div className="flex bg-gray-100 px-2 w-fit rounded-full border-2 gap-4 text-gray-600 text-center">
                  {/* counter controls */}
                  <div>
                    <button
                      onClick={() => {
                        if (cartItems[p.id] === 1) {
                          toast.error("Can't be less than 1");
                        } else {
                          removeFromCart(p.id);
                        }
                      }}
                    >
                      <span className="icon-minus"></span>
                    </button>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="text-[14px] w-3"
                      value={cartItems[p.id]}
                      onChange={(e) => {
                        if (+e.target.value && +e.target.value >= 1) {
                          updateInCart(p.id, +e.target.value);
                        } else {
                          toast.error("Can't be less than 1");
                        }
                      }}
                    />
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        console.log("xd");
                        addToCart(p.id);
                      }}
                    >
                      <span className="icon-plus"></span>
                    </button>
                  </div>
                </div>
              </div>
              <button
                className="absolute top-1/2 -translate-y-1/2 right-0 bg-gray-100 px-3 py-2 rounded-full text-black"
                onClick={() => {
                  setIsConfirmation(true);
                }}
              >
                <IoTrashBinOutline />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex gap-4 flex-col">
            <span className="text-base font-normal">
              Are you shure you want to delete this item?
            </span>
            <div className="flex gap-4">
              <button
                className="uppercase w-[81px] py-3 rounded-full bg-black text-white"
                onClick={() => {
                  setIsConfirmation(false);
                  deleteFromCart(p.id);
                }}
              >
                <span className="font-semibold text-[12px]">Yes</span>
              </button>
              <button
                className="uppercase w-[81px] py-3 rounded-full bg-black bg-opacity-5 border-2"
                onClick={() => {
                  setIsConfirmation(false);
                }}
              >
                <span className="font-semibold text-[12px]">No</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

CartItem.propTypes = {};

export default CartItem;
