import React, { useEffect, useState } from "react";
import "./BestSelling.css";
import { bestProducts } from "../redux/productsData";
import SEO from "../SEO/SEO";
import { useCart } from "../Context/CartContext";

const BestSelling = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    return () => {};
  }, [selectedProduct]);

  return (
    <div id="BS-d01">
      <SEO />
      <div id="BS-d02">Best Selling</div>
      <div id="BS-d03">
        <div id="BS-d04">Showing 8 of 12 products</div>
        <div id="BS-d05" onClick={() => (window.location.href = "/shop")}>
          View more
        </div>
      </div>

      <div
        style={{
          marginTop: "8vh",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          width: "80vw",
          marginLeft: "auto",
          marginRight: "auto",
          height: "100vh",
        }}
      >
        {bestProducts.map((product, index) => (
          <div
            key={index}
            style={{
              marginLeft: "2vw",
              textAlign: "left",
            }}
          >
            <div id="item">
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "130px",
                  height: "130px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedProduct(product)}
              />
            </div>
            <div id="item-d01">
              <div id="item-d02">
                <p id="item-name">{product.name}</p>
                <div id="item-star" style={{ color: "#FFD700" }}>
                  {"⭐".repeat(product.star) + "☆".repeat(5 - product.star)}
                </div>
              </div>
              <div
                id="item-price"
                style={{ marginTop: "8px", fontSize: "12px" }}
              >
                {product.price}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div id="f-01">
        <div id="f-02">Our Specifications</div>
        <div id="f-03">
          We offer top-tier service and convenience to ensure your shopping
          experience is smooth, secure and completely hassle-free.
        </div>
        <div id="f-04">
          <div id="f-05" className="f5-1">
            <div id="f-06" className="f6-1">
              <img src="https://icons.veryicon.com/png/o/miscellaneous/eva-icon-fill/paper-plane-11.png" />
            </div>
            <p id="f-07">Free Shipping</p>
            <p id="f-08">
              Enjoy fast, free delivery on every order no conditions, just
              reliable doorstep.
            </p>
          </div>
          <div id="f-05" className="f5-2">
            <div id="f-06" className="f6-2">
              <img src="https://static.thenounproject.com/png/4786905-200.png" />
            </div>
            <p id="f-07">7 Days easy Return</p>
            <p id="f-08">
              Change your mind? No worries. Return any item within 7 days.
            </p>
          </div>
          <div id="f-05" className="f5-3">
            <div id="f-06" className="f6-3">
              <img src="https://www.svgrepo.com/show/90381/customer-service-headset.svg" />
            </div>
            <p id="f-07">24/7 Customer Support</p>
            <p id="f-08">
              We're here for you. Get expert help with our customer support.
            </p>
          </div>
        </div>
        <div id="f-09">Join Newsletter</div>
        <div id="f-010">
          Subscribe to get exclusive deals, new arrivals, and insider updates
          delivered straight to your inbox every week.
        </div>
        {/* <div id="f-011">   */}
        <input type="text" id="f-011" placeholder="Enter your Email address" />
        <div id="f-012">Get Updates</div>
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
                  marginTop: "18px",
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

export default BestSelling;
