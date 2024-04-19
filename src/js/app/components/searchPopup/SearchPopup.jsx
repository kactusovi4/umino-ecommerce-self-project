import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import Products from "./Products";
import SearchForm from "./SearchForm";
import CloseBtn from "../common/CLoseBtn";

async function fetchProducts(URL) {
  const res = await fetch(URL);

  return await res.json();
}

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

  // fetching data
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      try {
        const products = await fetchProducts(url);
        setProducts(products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, [url]);

  // search part
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
        <Products
          filteredProducts={filteredProducts}
          loading={loading}
          setUrl={setUrl}
        />
      </div>
    </div>
  );
};

SearchPopup.propTypes = {};

export default SearchPopup;
