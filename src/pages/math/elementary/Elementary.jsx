import { Link } from "react-router-dom";
import './elementary.css'; // Import the CSS file

const Elementary = () => {
  return (
    <div className="elementary-container">
      <h1 className="elementary-title">Elementary Math</h1>
      <div className="topics-grid">
        {/* Addition/Subtraction */}
        <Link to="/math/elementary/addsub" className="topic-card">
          <img src="/icon/+-.png" alt="Addition/Subtraction" className="topic-image" />
          <div className="topic-overlay">
            <h2>Addition/Subtraction</h2>
            <p>Learn the basics of addition and subtraction.</p>
          </div>
        </Link>

        {/* Multiplication */}
        <Link to="/math/elementary/multiplication" className="topic-card">
          <img src="/icon/mul.png" alt="Multiplication" className="topic-image" />
          <div className="topic-overlay">
            <h2>Multiplication</h2>
            <p>Master multiplication tables and techniques.</p>
          </div>
        </Link>

        {/* Time */}
        <Link to="/math/elementary/time" className="topic-card">
          <img src="/icon/image.png" alt="Time" className="topic-image" />
          <div className="topic-overlay">
            <h2>Time</h2>
            <p>Understand how to read and calculate time.</p>
          </div>
        </Link>

        {/* Geometry */}
        <Link to="/math/elementary/geometry" className="topic-card">
          <img src="/icon/geo.png" alt="Geometry" className="topic-image" />
          <div className="topic-overlay">
            <h2>Geometry</h2>
            <p>Explore shapes, angles, and measurements.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Elementary;