import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Awrapper from './Awrapper';
import './home.css';

const Home = () => {
  // IntersectionObserver for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animate'); // Add the animation class
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.5 } // Adjust this value as needed
    );

    // Observe all elements with the class "scroll-target"
    const scrollTargets = document.querySelectorAll('.scroll-target');
    scrollTargets.forEach((target) => observer.observe(target));

    // Cleanup function to disconnect the observer
    return () => {
      scrollTargets.forEach((target) => observer.unobserve(target));
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="home">
      <div className="frame">
        <div className="hero">
          <h1>Cambridge International Academy</h1>
        </div>

        <div className="video-container">
          <video className="video-background" autoPlay loop muted playsInline>
            <source src="/vids/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="about-section">
        <div className="about-content">
          {/* Image Section */}
          <div className="about-image scroll-target">
            <img src="images/class.png" alt="About Us" />
          </div>
          {/* Text Section */}
          <div className="about-text scroll-target">
            <h2>About Us</h2>
            <p>
              Welcome to Cambridge International Academy, where learning meets innovation.
              Our goal is to provide students with high-quality education using modern
              technology and interactive tools.
            </p>
          </div>
        </div>
      </div>

      <Awrapper />

      <div className="ai-learning-section">
        <div className="ai-learning-content">
          {/* Text Section */}
          <div className="ai-text scroll-target">
            <h2>AI in Learning</h2>
            <p>
              AI-powered tools help students understand complex topics more effectively.
              Our platform integrates AI-based tutoring, problem-solving, and personalized
              learning experiences to enhance education.
            </p>
          </div>
          {/* Image Section */}
          <div className="ai-image scroll-target">
            <img src="images/AI.png" alt="AI in Learning" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;