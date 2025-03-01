import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head"; // Ensure this is your component's correct name
import "./header.css";

const Header = ({ toggleTheme, theme }) => {
  const [click, setClick] = useState(false);

  const handleToggleMenu = () => {
    setClick(!click);
  };

  return (
    <>
      <Head toggleTheme={toggleTheme} theme={theme} />
      <header>
        <nav>
          {/* Navigation Links */}
          <ul className={`nav-links ${click ? "active" : ""}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/math">Math</Link>
            </li>
            <li>
              <Link to="/science">Science</Link>
            </li>
            <li>
              <Link to="/english">English</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            {/* Close button only visible when menu is open */}
            <li className="close-btn" onClick={handleToggleMenu}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </li>
          </ul>

          {/* Hamburger Menu */}
          <button
            className="toggle"
            onClick={handleToggleMenu}
          >
            {click ? (
              <i className="fa fa-times" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-bars" aria-hidden="true"></i> 
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
