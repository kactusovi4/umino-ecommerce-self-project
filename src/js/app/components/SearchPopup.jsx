import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Products from "./Products";
import SearchForm from "./SearchForm";

const shadow = document.querySelector(".page-shadow-popup");
function closePopup(el) {
  el.classList.remove("active");
  shadow.classList.remove("active");
  shadow.classList.add("pointer-events-none");
}

function closeHandler() {
  const popup = document.querySelector("#search-popup");
  closePopup(popup);
}

const SearchPopup = () => {
  const [search, setSearch] = useState("");
  function handleSearch(val) {
    setSearch(val);
  }

  return (
    <div
      id="search-popup"
      className="active popup-content -translate-y-full fixed top-0 w-screen h-[90vh] left-0 z-[99] shadow-xl"
    >
      <button
        className="popup-close absolute right-6 top-9"
        onClick={closeHandler}
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
      {/* <!-- actual content --> */}
      <div className="w-full h-[100%] flex flex-col bg-white pt-9 pb-16 px-4 overflow-y-scroll">
        <SearchForm handleTextChange={handleSearch} />
        {/* <!-- popular products --> */}
        <Products searchInput={search} />
      </div>
    </div>
  );
};

SearchPopup.propTypes = {};

export default SearchPopup;
