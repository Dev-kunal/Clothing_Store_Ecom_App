import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../Assets/tie.png";
import cart from "../Assets/shopping-bag.png";
import { auth } from "../Firebase/Firebase.util";

function Header(props) {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={logo} height="32" width="36" alt="logo" />
          <span className="brandname">modern_monk</span>
        </Link>
      </div>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT{" "}
        </Link>
        {/* <Link to="/signin" className="option">
          SIGN-IN{" "}
        </Link> */}
        {
          props.user ?
            <span className="option" onClick={() => auth.signOut()}>SIGN-OUT</span>
            :
            <Link className="option" to="/signin">SIGN-IN</Link>
        } 
        <Link to="/cart" className="option">
          <img
            className="logo"
            src={cart}
            height="28"
            width="28
        "
            alt="Cart"
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
