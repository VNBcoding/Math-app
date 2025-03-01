import React from "react";
import { Link } from "react-router-dom";
import "./head.css"
const Head = ({ toggleTheme, theme }) => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          {/* Logo Section */}
          <div className="logo flex items-center space-x-3">
            <Link to="/"> 
              <img
                src="/icon/Logo.png" 
                alt="Logo"
                className="w-20 h-20 mr-5" 
              />
            </Link>
            <div>
            <h1 className="text-xl font-semibold text-red-500" style={{ fontSize: "32px" }}>
              CAMBRIDGE INTERNATIONAL ACADEMY
            </h1>
              <span className="text-sm text-red">QUALITY EDUCATION & LEARNING</span>
            </div>
          </div>

          {/* Social Media & Theme Toggle */}
          <div className="flex">
            <div className="social space-x-4">
              <a href="https://www.facebook.com/cciaedu/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f icon"></i>
              </a>
              <a href="https://www.instagram.com/cciaedu/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram icon"></i>
              </a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter icon"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCaoFXP7_ztf4EcQyLsGIa9g" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube icon"></i>
              </a>
            </div>


            {/* Light/Dark Mode Icon */}
            <div className="flex justify-center items-center" style={{ marginLeft: '10px' }}>
              {/* Sun Icon (only for dark mode) */}
              {theme === "dark" && (
                <span
                  className="w-10 h-10 bg-yellow-500 text-white rounded-full flex justify-center items-center cursor-pointer"
                  onClick={toggleTheme}
                >
                  <i className="fas fa-sun text-lg"></i>
                </span>
              )}

              {/* Moon Icon (only for light mode) */}
              {theme === "light" && (
                <span
                  className="w-10 h-10 bg-gray-700 text-white rounded-full flex justify-center items-center cursor-pointer"
                  onClick={toggleTheme}
                >
                  <i className="fas fa-moon text-lg"></i>
                </span>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
