import { useEffect, useState } from "react";
import SearchPopup from "./components/searchPopup/SearchPopup";
import CartPopup from "./components/cartPopup/CartPopup";
import shopContextProvider from "./context/shop-context";

const App = () => {
  // console.log(inCart);

  return (
    <shopContextProvider>
      <SearchPopup
        setUrl={setUrl}
        products={products}
        loading={loading}
        addToCart={addToCart}
      />
      <CartPopup inCart={inCart} products={products} />
    </shopContextProvider>
  );
};

export default App;
