import React, { useState, useEffect } from "react";
import "./ComingSoon.css"; 

// Import the light background image
import lightBackground from "/icon/comingsoon1.png";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });


  const launchDate = new Date("2025-05-01T00:00:00").getTime();

  // Countdown timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [launchDate]);

  return (
    <div
      className="coming-soon"
      style={{ backgroundImage: `url(${lightBackground})` }}
    >
      <div className="content">
        <h1>Coming Soon</h1>
        <p>We're working hard to bring you something amazing. Stay tuned!</p>

        {/* Countdown Timer */}
        <div className="countdown">
          <div className="countdown-item">
            <span>{timeLeft.days}</span>
            <span>Days</span>
          </div>
          <div className="countdown-item">
            <span>{timeLeft.hours}</span>
            <span>Hours</span>
          </div>
          <div className="countdown-item">
            <span>{timeLeft.minutes}</span>
            <span>Minutes</span>
          </div>
          <div className="countdown-item">
            <span>{timeLeft.seconds}</span>
            <span>Seconds</span>
          </div>
        </div>

        {/* Newsletter Signup Form */}
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="email-input"
          />
          <button type="submit" className="notify-button">
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComingSoon;