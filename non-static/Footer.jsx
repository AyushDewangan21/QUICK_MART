import React from "react";
import "./Footer.css";
import SEO from "../SEO/SEO";

const Footer = () => {
  return (
    <div>
      <SEO />
      <div id="f-013">
        <div id="f-014">
          <div id="f-logo" onClick={() => (window.location.href = "/")}>
            <div id="f-logo-Quick">Quick</div>
            <div id="f-logo-Mart">Mart</div>
          </div>
          <div id="f-15">
            Welcome to QuickMart, your ultimate destination for the latest and
            smartest gadgets. From smartphones and smartwatches to essential
            accessories, we bring you the best in innovation — all in one place.
          </div>
          <div id="f-16">
            <div id="fb"></div>
            <div id="insta"></div>
            <div id="X"></div>
            <div id="linkedin"></div>
          </div>
        </div>
        <div id="f-17">
          <ul>PRODUCTS</ul>
          <ul>Earphones</ul>
          <ul>Headphones</ul>
          <ul>Smartphones</ul>
          <ul>Laptops</ul>
        </div>
        <div id="f-18">
          <ul>WEBSITE?</ul>
          <ul>Home</ul>
          <ul>Privacy Policy</ul>
          <ul>Become Plus Member</ul>
          <ul>Create Your Store</ul>
        </div>
        <div id="f-19">
          <ul>CONTACT</ul>
          <ul>+1-212-456-7890</ul>
          <ul>contact@example.com</ul>
          <ul>794 Francisco, 94102</ul>
        </div>
      </div>
      <div id="f-20">Copyright 2025 © QuickMart All Right Reserved.</div>
    </div>
  );
};

export default Footer;
