import React, { useEffect } from "react"; 
import "./awrapper.css"; 

const Awrapper = () => {
  // IntersectionObserver for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-animate");
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.5 } 
    );

    // Observe all elements with the class "box"
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => observer.observe(box));

    // Cleanup function to disconnect the observer
    return () => {
      boxes.forEach((box) => observer.unobserve(box));
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <section className="awrapper">
      <div className="container_wrap">
        <div className="box">
          <h1>Top 10 in Global Rankings</h1>
          <h3>Academy Ranking</h3>
        </div>
        <div className="box">
          <h1>250+ Math Courses Offered</h1>
          <h3>Math Courses Available</h3>
        </div>
      </div>
    </section>
  );
};

export default Awrapper;