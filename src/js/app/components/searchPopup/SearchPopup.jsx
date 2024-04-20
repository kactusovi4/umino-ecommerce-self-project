import { useEffect, useState, useRef, useContext } from "react";
import PropTypes from "prop-types";
import Products from "./Products";
import SearchForm from "./SearchForm";
import CloseBtn from "../common/CLoseBtn";
import { ShopContext } from "../../context/shop-context";

function filterProducts(products, val) {
  let filteredProducts = products;
  val &&
    (filteredProducts = products.filter((p) =>
      p.title.toLowerCase().includes(val.toLowerCase())
    ));
  return filteredProducts;
}

const SearchPopup = () => {
  const popup = useRef();
  const { products } = useContext(ShopContext);
  // console.log(products);

  const [search, setSearch] = useState("");
  function handleSearch(val) {
    setSearch(val);
  }
  const filteredProducts = filterProducts(products, search);

  return (
    <div
      id="search-popup"
      className="popup-content -translate-y-full fixed top-0 w-screen h-[90vh] left-0 z-[99] shadow-xl"
      ref={popup}
    >
      <CloseBtn popup={popup.current} />
      {/* <!-- actual content --> */}
      <div className="w-full h-[100%] flex flex-col bg-white pt-9 pb-16 px-4 overflow-y-scroll">
        <SearchForm handleSearch={handleSearch} />
        <Products filteredProducts={filteredProducts} />
      </div>
    </div>
  );
};

export default SearchPopup;
