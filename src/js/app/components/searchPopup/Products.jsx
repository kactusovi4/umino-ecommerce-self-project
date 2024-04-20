import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Card from "../common/Card";
import { ShopContext } from "../../context/shop-context";

function Products({ filteredProducts }) {
  // const [count, setCount] = useState(30);
  // const URL = `https://api.escuelajs.co/api/v1/products?offset=0&limit=${count}`;

  const { loading, setNewUrl, addToCart } = useContext(ShopContext);

  // useEffect(() => {
  //   setNewUrl(URL);
  // }, [URL]);

  if (loading) {
    return (
      <div className="grid place-content-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <>
      {/* <!-- search grid --> */}
      <div className="grid grid-cols-2 gap-4 tablet:gap-6 sm:grid-cols-3 tablet:grid-cols-4 large-desctop:grid-cols-5 extra-large-desctop:grid-cols-6 mx-auto max-w-[1420px]">
        {/* <!-- card --> */}
        {filteredProducts?.map((p) => {
          return <Card product={p} key={p.id} />;
        })}
      </div>
      <div className="size-full grid place-content-center pt-8">
        <button
          className="px-6 py-3 bg-purple-700 text-white rounded-xl"
          onClick={() => {
            setCount(count + 10);
          }}
        >
          Load More
        </button>
      </div>
    </>
  );
}

Products.propTypes = {};

export default Products;
