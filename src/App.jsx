import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../non-static/Header";
import Hero from "../non-static/Hero";
import ScrollingItems from "../non-static/ScrollingItems";
import LatestProducts from "../non-static/LatestProducts";
import BestSelling from "../non-static/BestSelling";
import Footer from "../non-static/Footer";
import Cart from "../non-static/Cart"; // <-- create this component
import Shop from "../non-static/shop";
import SEO from "../SEO/SEO";

function App() {
  return (
    <Router>
      <SEO />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ScrollingItems />
              <LatestProducts />
              <BestSelling />
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
