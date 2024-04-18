import React from "react";
import PropTypes from "prop-types";

const Card = ({ img, price, title }) => {
  return (
    <div>
      {/* <!-- card img and its buttons --> */}
      <div className="swiper-card group/img-container mb-4 rounded-xl overflow-hidden relative ">
        {/* <!-- card img --> */}
        <div className="img-container relative overflow-hidden rounded-xl">
          <img
            className="desctop:group-hover/img-container:scale-110 transition-all duration-500 min-h-[183px]"
            src={img}
            alt="fashion-product"
          />
        </div>
      </div>
      {/* <!-- card text --> */}
      <div className="gap-3 flex flex-col">
        <a className="hover:opacity-60 transition-all line-clamp-2" href="#">
          {title}
        </a>
        <div className="text-sm">
          <span className="text-page-red">${price}</span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string,
  price: PropTypes.number,
  title: PropTypes.string,
};

export default Card;
