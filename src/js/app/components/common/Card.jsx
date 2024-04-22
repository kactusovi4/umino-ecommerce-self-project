import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../../context/shop-context";
import { toast } from "react-toastify";

const errImgUrl = "";

function fixImageLink(imgs) {
  let newImgs = imgs;
  newImgs = newImgs.filter((i) => !i.includes(`"`));
  newImgs = newImgs.filter((i) => i.length);
  return newImgs;
}

const Card = ({ product: p }) => {
  const arr = fixImageLink(p.images);

  const { addToCart, cartItems } = useContext(ShopContext);

  if (!arr.length) {
    return <></>;
  }
  return (
    <div>
      {/* <!-- card img and its buttons --> */}
      <div className="peer swiper-card group/img-container mb-4 rounded-xl overflow-hidden relative">
        {/* <!-- card img --> */}
        <div
          className="img-container relative overflow-hidden rounded-t-xl"
          onClick={() => {
            console.log(p.images);
          }}
        >
          <img
            className="object-cover large-tablet:group-hover/img-container:opacity-0 transition-all duration-500 min-h-[183px]"
            src={p.images[0]}
            alt="fashion-product"
          />
          <img
            className="object-cover opacity-0 large-tablet:group-hover/img-container:opacity-100 large-tablet:group-hover/img-container:scale-110 transition-all duration-500 absolute top-0 left-0 -z-[1 min-h-[183px]"
            src={p.images[1]}
            alt="fashion-product"
          />
        </div>
        <div className="large-tablet:absolute large-tablet:bottom-4 large-tablet:px-4 w-full large-tablet:opacity-0 large-tablet:translate-y-full large-tablet:group-hover/img-container:opacity-100 large-tablet:group-hover/img-container:translate-y-0 transition-all duration-300">
          <button
            className="
          w-full px-4 py-3 uppercase bg-black rounded-b-xl text-white font-semibold 
          large-tablet:rounded-full large-tablet:bg-white large-tablet:text-black large-tablet:hover:bg-black large-tablet:hover:text-white transition-all duration-300
          disabled:opacity-65"
            onClick={() => {
              toast.success("Added to cart");
              addToCart(p.id);
            }}
            disabled={cartItems[p.id]}
          >
            {cartItems[p.id] ? "In cart" : "Add to cart"}
          </button>
        </div>
      </div>
      {/* <!-- card text --> */}
      <div className="grid grid-rows-[55px_auto_auto] gap-1">
        <a
          className="hover:opacity-60 transition-all line-clamp-2 text-xl h-max"
          href="#"
        >
          {p.title}
        </a>
        <div>
          <span className="icon-star"></span>
          <span className="icon-star"></span>
          <span className="icon-star"></span>
          <span className="icon-star"></span>
          <span className="icon-star"></span>
        </div>
        <span className="text-page-red text-lg font-medium">${p.price}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.array,
  price: PropTypes.number,
  title: PropTypes.string,
};

export default Card;
