import React, { useState } from "react";
import { Link } from "react-router-dom";
import './conventional.css'; // Ensure CSS is correctly imported
import backgroundImage from '/images/math.png';

const Conventional = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleFlip = (grade) => {
    setFlippedCard(flippedCard === grade ? null : grade);
  };

  const gradeData = [
    {
      id: "grade6",
      title: "Grade 6",
      description: "In Grade 6, students build a strong foundation in math by exploring:",
      topics: [
        "Ratios and proportional relationships",
        "Arithmetic with fractions and decimals",
        "Introduction to algebra and basic equations",
        "Geometry: Area, volume, and surface area",
        "Statistics and probability",
      ],
      link: "/math/conventional/grade6", // Normal endpoint for Grade 6
    },
    {
      id: "grade7",
      title: "Grade 7",
      description: "In Grade 7, students dive deeper into math concepts, including:",
      topics: [
        "Operations with rational numbers",
        "Expressions, equations, and inequalities",
        "Geometry: Scale drawings and angle relationships",
        "Probability and statistics",
        "Proportional relationships",
      ],
      link: "/ComingSoon", // Redirect to /Comingsoon for Grade 7
    },
    {
      id: "grade8",
      title: "Grade 8",
      description: "In Grade 8, students prepare for high school math by tackling:",
      topics: [
        "Linear equations and functions",
        "Geometry: Pythagorean theorem and transformations",
        "Exponents and scientific notation",
        "Functions and their representations",
        "Data analysis and scatter plots",
      ],
      link: "/ComingSoon", // Redirect to /Comingsoon for Grade 8
    },
  ];

  return (
    <div className="conventional-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className="conventional-title">Conventional Math (Grades 6-8)</h1>
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
                  Explore Lectures & Quizzes
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conventional;