import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <nav className="navbar">
      <h3>Web Courses</h3>

      <div className="header">
        <Link to="/Home">Home</Link>
        <Link to="./Static">Static</Link>
        <Link to="./Blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Header;
