import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";
import { CartProvider } from "../Context/CartContext";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <StrictMode>
      <CartProvider>
        <App />
      </CartProvider>
    </StrictMode>
  </HelmetProvider>
);
