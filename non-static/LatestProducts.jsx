import React, { useState, useEffect } from "react";
import "./LatestProducts.css";
import { latestProducts } from "../redux/productsData";
import SEO from "../SEO/SEO";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
const LatestProducts = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    return () => {};
  }, [selectedProduct]);

  return (
    <div>
      <SEO />
      <div id="LP-d01">
        <div id="LP-d02">Latest Products</div>

        <div id="LP-d03">
          <div id="LP-d04">Showing 4 of 12 products</div>
          <div id="LP-d05" onClick={() => (window.location.href = "/shop")}>
            View more
          </div>
        </div>
      </div>

      <div id="LP-d06">
        {latestProducts.map((product, index) => (
          <div key={index} id="LP-d07">
            <div
              id="item"
              onClick={() => setSelectedProduct(product)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
            </div>

            <div id="item-d01">
              <div id="item-d02">
                <p id="item-name">{product.name}</p>
                <div id="item-star">
                  {"⭐".repeat(product.star) + "☆".repeat(5 - product.star)}
                </div>
              </div>
              <div id="item-price">{product.price}</div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button
              className="popup-close"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>

            {/* Thumbnail */}
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              style={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
                backgroundColor: "#f5f5f5",
                padding: "20px",
                borderRadius: "10px",
              }}
            />

            {/* Main image */}
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              style={{
                width: "430px",
                height: "430px",
                objectFit: "cover",
                backgroundColor: "#f5f5f5",
                padding: "20px",
                borderRadius: "10px",
                marginLeft: "20px",
              }}
            />

            {/* Details */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                marginLeft: "80px",
                color: "rgba(0, 0, 0, 0.706)",
                lineHeight: "0",
              }}
            >
              <h2 style={{ marginRight: "auto" }}>{selectedProduct.name}</h2>
              <p style={{ marginRight: "auto" }}>
                {"⭐".repeat(selectedProduct.star)}4 Reviews
              </p>
              <p
                style={{
                  marginRight: "auto",
                  color: "rgba(0, 0, 0, 0.906)",
                  fontSize: "30px",
                  fontWeight: "600",
                  marginTop: "8vh",
                }}
              >
                {selectedProduct.price}
              </p>
              <p style={{ marginRight: "auto", marginTop: "1vh" }}>
                Save 23% right now
              </p>
              <br />
              <div
                id="Buttonaddtocart"
                onClick={() => {
                  addToCart(selectedProduct);
                }}
                style={{
                  cursor: "pointer",
                  // padding: "10px 20px",
                  backgroundColor: "#000",
                  color: "#fff",
                  borderRadius: "5px",
                  textAlign: "center",
                  width: "120px",
                }}
              >
                Add to Cart
              </div>
              <div
                style={{
                  marginTop: "5vh",
                  height: "0.1vh",
                  backgroundColor: "black",
                  width: "65vh",
                }}
              ></div>
              <p style={{ marginRight: "auto", marginTop: "4vh" }}>
                Free shipping worldwide
              </p>
              <p style={{ marginRight: "auto" }}>100% Secured Payment</p>
              <p style={{ marginRight: "auto" }}>Trusted by top brands</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LatestProducts;
