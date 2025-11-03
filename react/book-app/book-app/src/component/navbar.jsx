import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-title">Book App</span>
      <a className="navbar-link" href="#" style={{ marginLeft: 24 }}>
        Home
      </a>
    </nav>
  );
}

export default Navbar;
