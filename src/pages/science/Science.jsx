import React from "react";
import "./science.css"
import { Link } from "react-router-dom";

const Science = () => {
  return (
    <div className="container">
      <h1>Math Topics</h1>
      <ul>
        <li><Link to="/science/">Earth</Link></li>
        <li><Link to="/science/">Life</Link></li>
        <li><Link to="/science/">Physical</Link></li>
        <li><Link to="/science/">Chemistry </Link></li>
      </ul>
    </div>
  );
};

export default Science;
