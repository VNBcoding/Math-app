import React, { useState } from 'react';
import './contact.css'; // Import the CSS file

const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock email submission (replace with actual API call)
    console.log('Email:', email);
    console.log('Message:', message);

    // Simulate a successful submission
    setIsSubmitted(true);

    // Clear form fields
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Cambridge International Academy</h1>
        <p>QUALITY EDUCATION & LEARNING</p>
        <p>Empowering students with knowledge and skills for a brighter future.</p>
      </header>

      <section className="contact-form">
        <h2>Contact Us</h2>
        {isSubmitted ? (
          <div className="success-message">
            <p>Your message has been sent successfully!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        )}
      </section>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Address:</strong> 300 Water St #1, Whitby, ON L1N 9B6, CANADA</p>
        <p><strong>Tel:</strong> (905) 426-4254</p>
        <p><strong>Principal:</strong> <a href="mailto:rukikuchi123456789@gmail.com">rukikuchi123456789@gmail.com</a></p>
        <p><strong>Director:</strong> <a href="mailto:nbv131103@gmail.com">rukikuchi123456789@gmail.com</a></p>
        <p><strong>Director (Lin Lin):</strong> (647) 505-7982</p>
      </section>

      
    </div>
  );
};

export default ContactPage;