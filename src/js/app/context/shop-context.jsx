import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

async function fetchProducts(URL) {
  const res = await fetch(URL);
  return await res.json();
}

function getDefaultInCart(products) {
  const inCart = {};
  inCart[-1] = 0;
  products.forEach((p) => {
    inCart[p.id] = 0;
  });
  return inCart;
}

export const shopContextProvider = (props) => {
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
  // fetching data
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(
    "https://api.escuelajs.co/api/v1/products?offset=0&limit=30"
  );
  const setNewUrl = (url) => setUrl(url);

  useEffect(() => {
    getProducts();
  }, [url]);
  // cart

  const [cartItems, setCartItems] = useState({});
  useEffect(() => {
    setCartItems(getDefaultInCart(products));
  }, [products]);

  function addToCart(id) {
    setCartItems((prev) => {
      return { ...prev, [id]: prev[id] + 1 };
    });
  }
  function removeFromCart(id) {
    setCartItems((prev) => {
      return { ...prev, [id]: prev[id] === 0 ? 0 : prev[id] - 1 };
    });
  }

  const contextValue = {
    cartItems,
    removeFromCart,
    addToCart,
    products,
    loading,
    setNewUrl,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default shopContextProvider;
