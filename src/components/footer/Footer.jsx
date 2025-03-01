import React from "react";
import "./footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <>
      <footer id="cambridge-footer" className="bg-gray-900 text-white py-10">
        <div id="footer-container" className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo & Info */}
          <div id="footer-logo-section" className="space-y-4" style={{marginLeft: '0px', paddingLeft: '0px'}}>
            <img src="/icon/Logo.png" alt="Cambridge International Academy" className="h-16"/>
            <h1 className="text-lg font-bold">CAMBRIDGE INTERNATIONAL ACADEMY</h1>
            <span className="text-sm text-gray-400">QUALITY EDUCATION & LEARNING</span>
            <p className="text-gray-300 text-sm">
              Empowering students with knowledge and skills for a brighter future.
            </p>
          </div>

          {/* Explore Links */}
          <div id="footer-explore-links ">
            <h3 className="text-lg font-semibold mb-3 ">Explore</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
              <li><a href="/math" className="hover:text-gray-400">Math</a></li>
              <li><a href="/science" className="hover:text-gray-400">Science</a></li>
              <li><a href="/english" className="hover:text-gray-400">English</a></li>
              <li><a href="/contact" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div id="footer-quick-links">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Student Portal</a></li>
              <li><a href="#" className="hover:text-gray-400">Staff Directory</a></li>
              <li><a href="#" className="hover:text-gray-400">Policies</a></li>
              <li><a href="#" className="hover:text-gray-400">Privacy</a></li>
              <li><a href="#" className="hover:text-gray-400">Support</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div id="footer-contact-info">
            <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
            <ul className="space-y-3 text-gray-300">
              <li><i className="fa fa-map mr-2"></i> 300 Water St #1, Whitby, ON L1N 9B6, CANADA</li>
              <li><i className="fa fa-phone-alt mr-2"></i> Tel: (905) 426-4254</li>
              <li><i className="fa fa-envelope mr-2"></i> Principal: <a href="mailto:sandra.arff@cambridgeinternationalacademy.ca" className="hover:text-gray-400">sandra.arff@cambridgeinternationalacademy.ca</a></li>
              <li><i className="fa fa-envelope mr-2"></i> Director: <a href="mailto:lin.lin@cambridgeinternationalacademy.ca" className="hover:text-gray-400">lin.lin@cambridgeinternationalacademy.ca</a></li>
              <li><i className="fa fa-phone mr-2"></i> Director (Lin Lin): (647) 505-7982</li>
            </ul>
          </div>

        </div>

        {/* Social Media & Legal Notice */}
        <div id="footer-social-legal" className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <div className="flex justify-center space-x-4 mb-3">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <p>©2025 All rights reserved | Cambridge International Academy</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;