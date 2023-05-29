import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router } from "react-router-dom"
import { CartProvider } from "./Context/StorePage";
import { ProductProvider } from "./Context/ProductPage";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <ProductProvider>
    <App />
    </ProductProvider>
    </CartProvider>
    </Router>    
  </React.StrictMode>,
  document.getElementById("root")
);
