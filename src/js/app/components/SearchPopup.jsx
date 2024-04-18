import React from "react";
import PropTypes from "prop-types";

const SearchPopup = (props) => {
  return (
    <div
      id="search-popup"
      className="popup-content -translate-y-full fixed top-0 w-screen h-[90vh] left-0 z-[99]"
    >
      <button className="popup-close absolute right-6 top-9">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="22"
          width="22"
          viewBox="0 -960 960 960"
        >
          <path
            className="fill-black opacity-60 group-hover:opacity-100 transition-all"
            d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
          />
        </svg>
      </button>
      {/* <!-- actual content --> */}
      <div className="w-full h-[100%] flex flex-col bg-white pt-9 pb-16 px-4 overflow-y-scroll">
        <div className="flex flex-col gap-4 w-full mb-8">
          <h3 className="text-xl font-medium text-center">Search Our Site</h3>
          <form action="" className="relative self-center w-full tablet:w-3/4">
            <input
              type="text"
              placeholder="I`m lookin for..."
              className="rounded-full font-medium px-5 py-4 text-black transition-all w-full bg-white ring-1 ring-gray-300 focus:ring-black duration-200 flex-1"
            />
            <button
              type="submit"
              className="absolute right-5 top-1/2 -translate-y-1/2"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9 11.731C11.8 11.731 11.8 11.731 11.9 11.731C11.8 11.8304 11.8 11.8304 11.8 11.8304C11.3 12.3275 10.7 12.7251 9.9 13.0234C9.2 13.3216 8.4 13.4211 7.6 13.4211C6.8 13.4211 6 13.2222 5.3 12.924C4.6 12.6257 4 12.2281 3.4 11.6316C2.9 11.1345 2.4 10.4386 2.1 9.74269C1.8 9.1462 1.7 8.45029 1.7 7.65497C1.7 6.85965 1.9 6.06433 2.2 5.36842C2.5 4.5731 2.9 3.97661 3.4 3.38012C4 2.88304 4.6 2.48538 5.3 2.18713C6 1.88889 6.8 1.69006 7.6 1.69006C8.4 1.69006 9.2 1.88889 9.9 2.18713C10.6 2.48538 11.3 2.88304 11.8 3.47953C12.3 3.97661 12.7 4.67251 13.1 5.36842C13.4 6.06433 13.6 6.76023 13.6 7.65497C13.6 8.45029 13.4 9.24561 13.1 9.94152C12.8 10.538 12.4 11.1345 11.9 11.731ZM16.7 15.4094L13.6 12.3275C14.1 11.6316 14.5 10.9357 14.8 10.1404C15.1 9.34503 15.2 8.45029 15.2 7.55556C15.2 6.46199 15 5.46784 14.6 4.5731C14.2 3.67836 13.7 2.88304 13 2.18713C12.3 1.49123 11.5 0.994152 10.6 0.596491C9.7 0.19883 8.7 0 7.6 0C6.6 0 5.6 0.19883 4.6 0.596491C3.7 0.994152 2.9 1.49123 2.2 2.18713C1.5 2.88304 1 3.67836 0.6 4.67251C0.2 5.56725 0 6.5614 0 7.65497C0 8.64912 0.2 9.64327 0.6 10.6374C1 11.5322 1.6 12.3275 2.3 13.0234C3 13.7193 3.8 14.2164 4.7 14.7134C5.6 15.0117 6.6 15.2105 7.6 15.2105C8.5 15.2105 9.4 15.1111 10.2 14.8129C11 14.5146 11.8 14.117 12.4 13.6199L15.5 16.7018C15.7 16.9006 15.9 17 16.1 17C16.3 17 16.5 16.9006 16.7 16.7018C16.9 16.5029 17 16.3041 17 16.1053C17 15.807 16.9 15.6082 16.7 15.4094Z"
                  fill="#111111"
                ></path>
              </svg>
            </button>
          </form>
          {/* <!-- quick search --> */}
          <div className="flex gap-3 items-center content-center justify-center">
            <span className="text-gray-700">Quick Search: </span>
            <a className="hover:opacity-60 transition-all" href="#">
              shirt,{" "}
            </a>
            <a className="hover:opacity-60 transition-all" href="#">
              dress,{" "}
            </a>
            <a className="hover:opacity-60 transition-all" href="#">
              sweater
            </a>
          </div>
        </div>
        {/* <!-- popular products --> */}
        <h3 className="text-xl font-medium mb-6">Popular Products</h3>
        {/* <!-- search grid --> */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 tablet:grid-cols-4 large-desctop:grid-cols-5">
          {/* <!-- card --> */}
          <div>
            {/* <!-- card img and its buttons --> */}
            <div className="swiper-card group/img-container mb-4 rounded-xl overflow-hidden relative \">
              {/* <!-- card img --> */}
              <div className="img-container relative overflow-hidden">
                <img
                  className="desctop:group-hover/img-container:scale-110 transition-all duration-500"
                  src="i/fashion_products_21_1.webp"
                  alt="fashion-product"
                />
              </div>
            </div>
            {/* <!-- card text --> */}
            <div className="gap-3 flex flex-col">
              <a className="hover:opacity-60 transition-all" href="#">
                Square Textured Striped
              </a>
              <div>
                <span className="icon-star"></span>
                <span className="icon-star"></span>
                <span className="icon-star"></span>
                <span className="icon-star"></span>
                <span className="icon-star"></span>
              </div>
              <div className="text-sm">
                <span className="text-page-red">$115.00</span>
                <span className="text-gray-600 line-through">$180.00</span>
              </div>
              <div className="flex gap-2">
                <div className="size-6 rounded-full bg-white ring-1 ring-black flex items-center justify-center">
                  <div className="size-[20px] bg-teal-500 rounded-full"></div>
                </div>
                <div className="opacity-50 size-6 rounded-full bg-white ring-1 ring-gray-500 flex items-center justify-center">
                  <div className="size-[20px] bg-purple-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- card --> */}
          <div>
            {/* <!-- card img and its buttons --> */}
            <div className="swiper-card group/img-container mb-4 rounded-xl overflow-hidden relative \">
              {/* <!-- card img --> */}
              <div className="img-container relative overflow-hidden">
                <img
                  className="desctop:group-hover/img-container:scale-110 transition-all duration-500"
                  src="i/fashion_products_22_1_35bfb1ff-ba53-4183-8165-40ad7779a8a7.webp"
                  alt="fashion-product"
                />
              </div>
            </div>
            {/* <!-- card text --> */}
            <div className="gap-3 flex flex-col">
              <a className="hover:opacity-60 transition-all" href="#">
                Square Textured Striped
              </a>
              <div>
                <span className="icon-star"></span>
                <span className="icon-star"></span>
                <span className="icon-star"></span>
                <span className="icon-star"></span>
                <span className="icon-star"></span>
              </div>
              <div className="text-sm">
                <span className="text-page-red">$115.00</span>
                <span className="text-gray-600 line-through">$180.00</span>
              </div>
              <div className="flex gap-2">
                <div className="size-6 rounded-full bg-white ring-1 ring-black flex items-center justify-center">
                  <div className="size-[20px] bg-teal-500 rounded-full"></div>
                </div>
                <div className="opacity-50 size-6 rounded-full bg-white ring-1 ring-gray-500 flex items-center justify-center">
                  <div className="size-[20px] bg-purple-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- card --> */}
          <div>
            {/* <!-- card img and its buttons --> */}
            <div className="swiper-card group/img-container mb-4 rounded-xl overflow-hidden relative \">
              {/* <!-- card img --> */}
              <div className="img-container relative overflow-hidden">
                <img
                  className="desctop:group-hover/img-container:scale-110 transition-all duration-500"
                  src="i/fashion_products_21_1.webp"
                  alt="fashion-product"
                />
              </div>
            </div>
            {/* <!-- card text --> */}
            <div className="gap-3 flex flex-col">
              <a className="hover:opacity-60 transition-all" href="#">
                Square Textured Striped
              </a>
              <div>
                <span className="icon-star"></span>
                <span className="icon-star"></span>
                <span className="icon-star"></span>
                <span className="icon-star"></span>
                <span className="icon-star"></span>
              </div>
              <div className="text-sm">
                <span className="text-page-red">$115.00</span>
                <span className="text-gray-600 line-through">$180.00</span>
              </div>
              <div className="flex gap-2">
                <div className="size-6 rounded-full bg-white ring-1 ring-black flex items-center justify-center">
                  <div className="size-[20px] bg-teal-500 rounded-full"></div>
                </div>
                <div className="opacity-50 size-6 rounded-full bg-white ring-1 ring-gray-500 flex items-center justify-center">
                  <div className="size-[20px] bg-purple-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- card --> */}
          <div>
            {/* <!-- card img and its buttons --> */}
            <div className="swiper-card group/img-container mb-4 rounded-xl overflow-hidden relative \">
              {/* <!-- card img --> */}
              <div className="img-container relative overflow-hidden">
                <img
                  className="desctop:group-hover/img-container:scale-110 transition-all duration-500"
                  src="i/fashion_products_22_1_35bfb1ff-ba53-4183-8165-40ad7779a8a7.webp"
                  alt="fashion-product"
                />
              </div>
            </div>
            {/* <!-- card text --> */}
            <div className="gap-3 flex flex-col">
              <a className="hover:opacity-60 transition-all" href="#">
                Square Textured Striped
              </a>
              <div>
                <span className="icon-star"></span>
                <span className="icon-star"></span>
                <span className="icon-star"></span>
                <span className="icon-star"></span>
                <span className="icon-star"></span>
              </div>
              <div className="text-sm">
                <span className="text-page-red">$115.00</span>
                <span className="text-gray-600 line-through">$180.00</span>
              </div>
              <div className="flex gap-2">
                <div className="size-6 rounded-full bg-white ring-1 ring-black flex items-center justify-center">
                  <div className="size-[20px] bg-teal-500 rounded-full"></div>
                </div>
                <div className="opacity-50 size-6 rounded-full bg-white ring-1 ring-gray-500 flex items-center justify-center">
                  <div className="size-[20px] bg-purple-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SearchPopup.propTypes = {};

export default SearchPopup;