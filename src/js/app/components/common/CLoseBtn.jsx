import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const shadow = document.querySelector(".page-shadow-popup");
function closePopup(el) {
  el.classList.remove("active");
  shadow.classList.remove("active");
  shadow.classList.add("pointer-events-none");
}

const CLoseBtn = ({ popup }) => {
  // console.log(shadow.classList, popup);
  return (
    <button
      className="popup-close absolute right-6 top-9 p-1 bg-white rounded-full z-10"
      onClick={() => closePopup(popup)}
    >
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
  );
};

CLoseBtn.propTypes = {};

export default CLoseBtn;
