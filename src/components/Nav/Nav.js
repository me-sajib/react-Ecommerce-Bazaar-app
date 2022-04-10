import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-wrap">
      <div className="nav-container container">
        <div className="logo">logo</div>
        <div className="nav-item">
          <nav>
            <a href="/">home</a>
            <a href="/shop">Shop</a>
            <a href="/orders">Orders</a>
            <a href="/login">Login</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
