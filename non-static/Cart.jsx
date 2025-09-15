import { useState } from "react";
import { useCart } from "../Context/CartContext";
function Cart() {
  const { cart, removeFromCart } = useCart();

  // Calculate subtotal
  const subtotal = cart.reduce(
    (acc, item) =>
      acc + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );
  const shipping = cart.length > 0 ? 5 : 0; // Example fixed shipping
  const total = subtotal + shipping;

  const [payment, setPayment] = useState("cod");

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        marginTop: "8vh",
      }}
    >
      {/* Left: Cart Items */}
      <div style={{ flex: 2 }}>
        <div
          style={{
            display: "flex",
            fontSize: "xx-large",
            padding: "10px",
            color: "#434343",
            fontWeight: "700",
          }}
        >
          Your<div style={{ color: "#e8b600" }}>Cart</div>
        </div>
        {cart.length === 0 ? (
          <p
            style={{
              height: "40vh",
              width: "60vw",
              // backgroundColor: "red",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "10vh",
              fontWeight: "700",
              color: "rgb(67, 67, 67)",
            }}
          >
            Cart is Empty ! Shop now.
          </p>
        ) : (
          cart.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "15px",
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {/* Product Info */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    marginRight: "15px",
                  }}
                />
                <div>
                  <h3 style={{ margin: "0 0 5px" }}>{item.name}</h3>
                  <p style={{ margin: "0 0 5px" }}>Price: {item.price}</p>
                  <p style={{ margin: 0 }}>Quantity: {item.quantity}</p>
                </div>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  padding: "8px 10px",
                  backgroundColor: "red",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      {/* Right: Payment Summary */}
      <div
        style={{
          flex: 1,
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "20px",
          height: "fit-content",
          marginTop: "4vh",
        }}
      >
        <h3>Payment Summary</h3>

        <div style={{ marginBottom: "10px" }}>
          <strong>Payment Method</strong>
          <br />
          <label
            className="block mb-2"
            style={{ display: "block", marginTop: "2vh" }}
          >
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={payment === "cod"}
              onChange={(e) => setPayment(e.target.value)}
            />
            COD
          </label>

          <label className="block mb-2">
            <input
              type="radio"
              name="payment"
              value="stripe"
              checked={payment === "stripe"}
              onChange={(e) => setPayment(e.target.value)}
            />
            Stripe Payment
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <strong>Address</strong>
          <p>Add Address</p>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Shipping: ${shipping.toFixed(2)}</p>
          <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <input
              type="text"
              placeholder="Coupon Code"
              style={{ flex: 1, padding: "5px" }}
            />
            <button
              style={{
                padding: "6px 12px",
                backgroundColor: "#000",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Apply
            </button>
          </div>
          <h4>Total: ${total.toFixed(2)}</h4>
        </div>

        <button
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "green",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Cart;
