import React from "react";
import { allProducts } from "../redux/productsData"; // adjust path if needed
import SEO from "../SEO/SEO";
import { useCart } from "../Context/CartContext";

const Shop = () => {
  const { addToCart } = useCart();
  return (
    <div
      className="shop-container"
      style={{
        // width: "70vw",
        marginTop: "14vh",
        marginLeft: "8vw",
        // marginRight: "auto ",
      }}
    >
      <SEO />
      <div
        style={{
          display: "flex",
          gap: "10px",
          fontSize: "5vh",
          fontWeight: "700",
        }}
      >
        <div style={{ color: "#434343" }}>All</div>
        <div style={{ color: "#e8b600" }}>Products</div>
      </div>
      <div
        className="products-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // 4 columns
          gap: "1px",
        }}
      >
        {allProducts.slice(0, 12).map(
          (
            product,
            index // 3 rows × 4 cols = 12 products
          ) => (
            <div
              key={index}
              className="product-card"
              style={{
                padding: "15px",
                textAlign: "left",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "12vw",
                  height: "35vh",
                  padding: "20px",
                  borderRadius: "10px",
                  objectFit: "contain",
                  backgroundColor: "#f5f5f5",
                }}
              />
              <h3
                style={{
                  margin: "10px 0",
                  fontSize: "medium",
                  fontWeight: "normal",
                }}
              >
                {product.name}
              </h3>
              <p style={{ fontWeight: "bold" }}>{product.price}</p>
              <p>
                {"⭐".repeat(product.star)}
                {"☆".repeat(5 - product.star)}
              </p>
              <div
                onClick={() => {
                  addToCart(product);
                }}
                style={{
                  cursor: "pointer",
                  backgroundColor: "black",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "40px",
                  width: "100px",
                  color: "white",
                  fontSize: "small",
                }}
              >
                Add to Cart
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Shop;
