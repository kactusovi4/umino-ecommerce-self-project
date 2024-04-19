import React from "react";
import PropTypes from "prop-types";

const Card = ({ imgs, price, title }) => {
  return (
    <div>
      {/* <!-- card img and its buttons --> */}
      <div className="swiper-card group/img-container mb-4 rounded-xl overflow-hidden relative ">
        {/* <!-- card img --> */}
        <div
          className="img-container relative overflow-hidden rounded-xl"
          onClick={() => console.log(imgs)}
        >
          <img
            class="desctop:group-hover/img-container:opacity-0 transition-all duration-500 min-h-[183px]"
            src={imgs[0]}
            alt="fashion-product"
          />
          <img
            class="opacity-0 desctop:group-hover/img-container:opacity-100 desctop:group-hover/img-container:scale-110 transition-all duration-500 absolute top-0 left-0 -z-[1 min-h-[183px]"
            src={imgs[1]}
            alt="fashion-product"
          />
        </div>
      </div>
      {/* <!-- card text --> */}
      <div className="grid grid-rows-[55px_auto_auto] gap-3">
        <a
          className="hover:opacity-60 transition-all line-clamp-2 text-xl h-max"
          href="#"
        >
          {title}
        </a>
        <div>
          <span class="icon-star"></span>
          <span class="icon-star"></span>
          <span class="icon-star"></span>
          <span class="icon-star"></span>
          <span class="icon-star"></span>
        </div>
        <span className="text-page-red text-lg font-medium">${price}</span>
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
