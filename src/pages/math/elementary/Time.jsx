import React, { useState } from 'react';


const Time = () => {
  const [assignment, setAssignment] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [activeSection, setActiveSection] = useState('lecture');

  const handleAssignmentChange = (e) => {
    setAssignment(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className="time-container">
      <div className="tabs">
        <button onClick={() => setActiveSection('lecture')}>Lecture</button>
        <button onClick={() => setActiveSection('assignment')}>Assignment</button>
        <button onClick={() => setActiveSection('comments')}>Comments</button>
      </div>

      {activeSection === 'lecture' && (
        <section className="lecture">
          <h2>Lecture: Time</h2>
          <p>Welcome to the lecture on time. In this lecture, we will cover the basics of reading and understanding time...</p>
        </section>
      )}

      {activeSection === 'assignment' && (
        <section className="assignment">
          <h2>Assignment</h2>
          <textarea
            value={assignment}
            onChange={handleAssignmentChange}
            placeholder="Type your assignment here..."
          />
          <button>Submit Assignment</button>
        </section>
      )}

      {activeSection === 'comments' && (
        <section className="comments">
          <h2>Comments</h2>
          <form onSubmit={handleCommentSubmit}>
            <textarea
              value={comment}
              onChange={handleCommentChange}
              placeholder="Type your comment here..."
            />
            <button type="submit">Submit Comment</button>
          </form>
          <div className="comments-list">
            {comments.map((cmt, index) => (
              <p key={index}>{cmt}</p>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Time;