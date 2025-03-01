import React from 'react';
import { Link } from "react-router-dom";
import './math.css';

const Math = () => {
  return (
    <div className="math-learn-container">
      <h1 className="math-main-title">Math Adventures</h1>

      <div className="math-pathway">
        {/* Elementary Math Section */}
        <div className="math-card math-card--elementary">
          <div className="math-card__content">
            <h2>Elementary Math</h2>
            <p>Discover numbers through playful activities!</p>
            <Link to="/math/elementary" className="math-cta">Start Journey</Link>
          </div>
        </div>

        {/* Interactive Math Section */}
        <div className="math-card math-card--interactive">
          <div className="math-card__content math-card__content--reverse">
            <h2>Interactive Math (G6-8)</h2>
            <p>Solve puzzles that come to life!</p>
            <Link to="/math/interactive" className="math-cta">Play Now</Link>
          </div>
        </div>

        {/* Conventional Math Section */}
        <div className="math-card math-card--conventional">
          <div className="math-card__content">
            <h2>Conventional Math (G6-8)</h2>
            <p>Master classic techniques with modern flair</p>
            <Link to="/math/conventional" className="math-cta">Learn Methods</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Math;