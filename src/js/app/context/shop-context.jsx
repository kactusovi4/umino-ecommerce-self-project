import React, { createContext, useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

export const ShopContext = createContext(null);

async function fetchProducts(URL) {
  const res = await fetch(URL);
  return await res.json();
}

function getDefaultInCart(products) {
  const inCart = {};
  // inCart[-1] = 0;
  products.forEach((p) => {
    inCart[p.id] = inCart[p.id] || 0;
  });
  return inCart;
}

function updateCartCounter(cartItems) {
  const count = Object.values(cartItems).reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  document.querySelectorAll(".cart-counter").forEach((el) => {
    el.innerHTML = count;
  });
}

export const ShopContextProvider = (props) => {
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
  const [url, setUrl] = useState("https://api.escuelajs.co/api/v1/products");
  const setNewUrl = (url) => setUrl(url);

  useEffect(() => {
    getProducts();
  }, [url]);
  // cart

  const localCart = JSON.parse(localStorage.getItem("cartItems")) || {};
  const [cartItems, setCartItems] = useState(localCart);

  useEffect(() => {
    if (Object.keys(cartItems).length === 0) {
      setCartItems(getDefaultInCart(products));
    }
  }, [products]);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateCartCounter(cartItems);
  }, [cartItems]);

  function addToCart(id) {
    setCartItems((prev) => {
      return { ...prev, [id]: prev[id] + 1 };
    });
  }
  function removeFromCart(id) {
    setCartItems((prev) => {
      return { ...prev, [id]: prev[id] - 1 };
    });
  }
  function deleteFromCart(id) {
    setCartItems((prev) => {
      return { ...prev, [id]: 0 };
    });
  }
  function updateInCart(id, value) {
    setCartItems((prev) => {
      return { ...prev, [id]: value };
    });
  }

  const contextValue = {
    cartItems,
    removeFromCart,
    addToCart,
    products,
    loading,
    setNewUrl,
    updateInCart,
    deleteFromCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
