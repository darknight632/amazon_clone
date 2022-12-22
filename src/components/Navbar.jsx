import React from "react";
import "./Navbar.css";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="navbar">
      <img
        className="navbar_logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="navbar_search">
        <input className="navbar_searchInput" type="text"></input>
        <AiOutlineSearch className="navbar_searchIcon" />
      </div>

      <div className="navbar_nav">
        <div className="navbar_option">
          <span className="navbar_option_line1">Hello</span>
          <span className="navbar_option_line2">Sign in</span>
        </div>
        <div className="navbar_option">
          <span className="navbar_option_line1">Returns</span>
          <span className="navbar_option_line2">& Orders</span>
        </div>
        <div className="navbar_option">
          <span className="navbar_option_line1">Your</span>
          <span className="navbar_option_line2">Prime</span>
        </div>

        <div className="navbar_cart">
          <AiOutlineShoppingCart />
          <span className="navbar_option_line2 navbar_cartCount">0</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
