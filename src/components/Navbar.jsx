import React from "react";
import "./Navbar.css";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { StateProvider, useStateValue } from "../StateProvider";
import { auth } from "../firebase";
const Navbar = () => {
  const [{ cart, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="navbar">
      <Link to="/">
        <img
          className="navbar_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="navbar_search">
        <input className="navbar_searchInput" type="text"></input>
        <AiOutlineSearch className="navbar_searchIcon" />
      </div>

      <div className="navbar_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuth} className="navbar_option">
            <span className="navbar_option_line1">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="navbar_option_line2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="navbar_option">
          <span className="navbar_option_line1">Returns</span>
          <span className="navbar_option_line2">& Orders</span>
        </div>
        <div className="navbar_option">
          <span className="navbar_option_line1">Your</span>
          <span className="navbar_option_line2">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="navbar_cart">
            <AiOutlineShoppingCart />
            <span className="navbar_option_line2 navbar_cartCount">
              {cart.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
