import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <nav className="navbar-container">
      <h2>Web Courses</h2>

      <div className="header">
        <Link to="/Home">Home</Link>
        <Link to="./Static">Statics</Link>
        <Link to="./Blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Header;
