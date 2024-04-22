import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Footer from "./components/footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("react-root"));
const footer = ReactDOM.createRoot(document.getElementById("footer"));

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);
