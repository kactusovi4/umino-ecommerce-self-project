import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const URL = "https://api.escuelajs.co/api/v1/products";
async function fetchProducts(URL) {
  const res = await fetch(URL);
  return await res.json();
}

function Products({ searchInput }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      try {
        const products = await fetchProducts(URL);
        setProducts(products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  if (searchInput) {
    setProducts(
      products.filter((p) =>
        p.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }

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
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 tablet:grid-cols-4 large-desctop:grid-cols-5">
        {/* <!-- card --> */}
        {loading ? (
          <div className="grid place-content-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          products.map((p) => {
            return (
              <Card
                img={p.images[0]}
                price={p.price}
                title={p.title}
                key={p.id}
              />
            );
          })
        )}
      </div>
    </>
  );
}

Products.propTypes = {};

export default Products;
