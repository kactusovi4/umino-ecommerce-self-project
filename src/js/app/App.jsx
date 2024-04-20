import { useEffect, useState } from "react";
import SearchPopup from "./components/searchPopup/SearchPopup";
import CartPopup from "./components/cartPopup/CartPopup";
import { ShopContextProvider } from "./context/shop-context";
import { ToastContainer } from "react-toastify";

const App = () => {
  // console.log(inCart);

  return (
    <>
      <ToastContainer />
      <ShopContextProvider>
        <SearchPopup />
        <CartPopup />
      </ShopContextProvider>
    </>
  );
};

export default App;
