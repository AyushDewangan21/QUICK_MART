import React, { useEffect, useState, useMemo } from "react";
import "./Header.css";
import SEO from "../SEO/SEO";
import { allProducts } from "../redux/productsData";
import debounce from "lodash.debounce";

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      currentScrollY > lastScrollY ? setHidden(true) : setHidden(false);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Debounced search logic
  const runSearch = (value) => {
    if (value.length > 0) {
      const filtered = allProducts.filter((p) =>
        p.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5)); // top 5 results
    } else {
      setSuggestions([]);
    }
  };

  const debouncedSearch = useMemo(() => debounce(runSearch, 300), []);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  const handleSelect = (name) => {
    setQuery(name);
    setSuggestions([]);
  };

  return (
    <>
      <SEO />
      <div id="d01" className={hidden ? "hidden" : ""}>
        <div id="logo">
          <div id="logo-Quick">Quick</div>
          <div id="logo-Mart">Mart</div>
        </div>
        {/* Search Box */}
        <div style={{ position: "relative", width: "500px" }}>
          <input
            type="text"
            id="d02"
            placeholder="Search products"
            value={query}
            onChange={handleChange}
            autoComplete="off"
          />
          {suggestions.length > 0 && (
            <ul
              style={{
                position: "absolute",
                top: "40px",
                left: 0,
                width: "100%",
                background: "white",
                border: "1px solid #ddd",
                listStyle: "none",
                margin: 0,
                padding: "5px 0",
                zIndex: 1000,
              }}
              onClick={() => (window.location.href = "/shop")}
            >
              {suggestions.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(item.name)}
                  style={{
                    padding: "8px",
                    cursor: "pointer",
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Nav */}
        <div id="d07" onClick={() => (window.location.href = "/")}>
          Home
        </div>
        <div id="d08" onClick={() => (window.location.href = "/shop")}>
          Shop
        </div>
        <div id="d03" onClick={() => (window.location.href = "/cart")}></div>
        <div
          style={{ filter: "contrast(50%)", cursor: "pointer" }}
          onClick={() => (window.location.href = "/cart")}
        >
          Cart
        </div>
        {/* <div id="d04"></div>
        <div style={{ paddingLeft: "4px", filter: "contrast(50%)" }}>
          favorites
        </div>
        <div id="d05"></div> */}
      </div>
      <div id="d06"></div>
    </>
  );
};

export default Header;
