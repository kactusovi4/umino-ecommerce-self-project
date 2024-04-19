import { Wrap } from "./styles/app";
import SearchPopup from "./components/searchPopup/SearchPopup";
import CartPopup from "./components/cartPopup/CartPopup";

const App = () => {
  return (
    <>
      <SearchPopup />
      <CartPopup />
    </>
  );
};

export default App;
