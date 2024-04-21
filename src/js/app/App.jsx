import { useEffect, useState } from "react";
import SearchPopup from "./components/searchPopup/SearchPopup";
import CartPopup from "./components/cartPopup/CartPopup";
import { ShopContextProvider } from "./context/shop-context";
import { ToastContainer, toast } from "react-toastify";

// import "react-toastify/dist/ReactToastify.css";
import "!style-loader!css-loader!react-toastify/dist/ReactToastify.css";

const App = () => {
  // console.log(inCart);

  return (
    <>
      <ToastContainer
        autoClose={2000}
        position="top-right"
        closeOnClick={true}
      />
      <ShopContextProvider>
        <SearchPopup />
        <CartPopup />
      </ShopContextProvider>
    </>
  );
};

export default App;
