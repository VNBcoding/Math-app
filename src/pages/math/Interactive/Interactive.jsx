import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../conventional/conventional.css'; // Import the CSS file
import mathImage from '/images/math1.png'; // Import the image

const Interactive = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleFlip = (grade) => {
    setFlippedCard(flippedCard === grade ? null : grade);
  };

  const gradeData = [
    {
      id: "grade6",
      title: "Grade 6",
      description: "Explore interactive math topics for Grade 6:",
      topics: [
        "Fractions and decimals",
        "Ratios and proportions",
        "Geometry basics",
        "Statistics and probability",
      ],
      link: "/math/interactive/grade6",
    },
    {
      id: "grade7",
      title: "Grade 7",
      description: "Explore interactive math topics for Grade 7:",
      topics: [
        "Rational numbers",
        "Expressions and equations",
        "Geometry: Scale drawings",
        "Probability and statistics",
      ],
      link: "/comingsoon",
    },
    {
      id: "grade8",
      title: "Grade 8",
      description: "Explore interactive math topics for Grade 8:",
      topics: [
        "Linear equations",
        "Functions",
        "Geometry: Pythagorean theorem",
        "Data analysis",
      ],
      link: "/comingsoon",
    },
  ];

  return (
    <div className="conventional-container" style={{ backgroundImage: `url(${mathImage})` }}>
      <h1 className="conventional-title">Interactive Math (Grades 6-8)</h1>
      <div className="grades-grid">
        {gradeData.map((grade) => (
          <div
            key={grade.id}
            id={`card-${grade.id}`}
            className={`grade-card ${flippedCard === grade.id ? "flipped" : ""}`}
            onClick={() => handleFlip(grade.id)}
          >
            <div className="card-inner">
              <div className="card-front">
                <h2 id={`front-title-${grade.id}`}>{grade.title}</h2>
                <p id={`front-description-${grade.id}`}>Click to see details.</p>
              </div>
              <div className="card-back">
                <h2 id={`back-title-${grade.id}`}>{grade.title}</h2>
                <p id={`back-description-${grade.id}`}>{grade.description}</p>
                <ul id={`topics-list-${grade.id}`}>
                  {grade.topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
                <Link to={grade.link} className="explore-button" id={`explore-button-${grade.id}`}>
                  Explore
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interactive;