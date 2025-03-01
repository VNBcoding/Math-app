import React, { useState, useEffect } from 'react';
import '../math.css';

const Geometry = () => {
  const [assignment, setAssignment] = useState('');
  const [commentData, setCommentData] = useState({
    username: '',
    rating: 5,
    comment: ''
  });
  const [comments, setComments] = useState([]);
  const [activeSection, setActiveSection] = useState('lecture');
  const [selectedGrade, setSelectedGrade] = useState('grade1');
  const [quizAnswers, setQuizAnswers] = useState({});
  const [feedback, setFeedback] = useState('');
  const [lectures] = useState({
    grade1: "Geometry in Grade 1: Learning about basic shapes and their properties.",
    grade2: "Geometry in Grade 2: Understanding 2D and 3D shapes.",
    grade3: "Geometry in Grade 3: Exploring angles and lines.",
    grade4: "Geometry in Grade 4: Working with symmetry and transformations."
  });
  const [quizzes] = useState({
    grade1: [
      { question: "What shape has 4 equal sides?", correctAnswer: "Square" },
      { question: "What shape is a ball?", correctAnswer: "Sphere" }
    ],
    grade2: [
      { question: "How many faces does a cube have?", correctAnswer: "6" },
      { question: "What shape is a can?", correctAnswer: "Cylinder" }
    ],
    grade3: [
      { question: "What is the sum of angles in a triangle?", correctAnswer: "180" },
      { question: "What is a shape with 5 sides called?", correctAnswer: "Pentagon" }
    ],
    grade4: [
      { question: "What is a line that divides a shape into two equal parts?", correctAnswer: "Symmetry line" },
      { question: "What is a shape that can be folded into a 3D object?", correctAnswer: "Net" }
    ]
  });
  const [loading] = useState(false);
  const [error] = useState(null);

  // Load comments from localStorage on component mount
  useEffect(() => {
    const savedComments = localStorage.getItem('geometryAppComments');
    if (savedComments) {
      try {
        setComments(JSON.parse(savedComments));
      } catch (e) {
        console.error('Error parsing saved comments:', e);
        localStorage.removeItem('geometryAppComments');
      }
    }
  }, []);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('geometryAppComments', JSON.stringify(comments));
  }, [comments]);

  // Store assignment in localStorage
  useEffect(() => {
    const savedAssignment = localStorage.getItem('geometryAppAssignment');
    if (savedAssignment) {
      setAssignment(savedAssignment);
    }
  }, []);

  const handleAssignmentChange = (e) => {
    const newAssignment = e.target.value;
    setAssignment(newAssignment);
    localStorage.setItem('geometryAppAssignment', newAssignment);
  };

  const handleAssignmentSubmit = (e) => {
    e.preventDefault();
    alert("Assignment submitted successfully!");
    setAssignment('');
    localStorage.removeItem('geometryAppAssignment');
  };

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setCommentData({
      ...commentData,
      [name]: value
    });
  };

  const handleRatingChange = (rating) => {
    setCommentData({
      ...commentData,
      rating
    });
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentData.username.trim() && commentData.comment.trim()) {
      const newComment = {
        id: Date.now(), // Unique ID for each comment
        ...commentData,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
      };
      
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      
      // Save to localStorage
      localStorage.setItem('geometryAppComments', JSON.stringify(updatedComments));
      
      setCommentData({
        username: '',
        rating: 5,
        comment: ''
      });
    } else {
      alert("Please enter a username and comment");
    }
  };

  const handleDeleteComment = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this comment?");
    if (confirmed) {
      const updatedComments = comments.filter(comment => comment.id !== id);
      setComments(updatedComments);
      localStorage.setItem('geometryAppComments', JSON.stringify(updatedComments));
    }
  };

  // Store quiz answers in localStorage
  useEffect(() => {
    const savedQuizAnswers = localStorage.getItem(`geometryAppQuizAnswers_${selectedGrade}`);
    if (savedQuizAnswers) {
      try {
        setQuizAnswers(JSON.parse(savedQuizAnswers));
      } catch (e) {
        console.error('Error parsing saved quiz answers:', e);
      }
    } else {
      setQuizAnswers({});
    }
  }, [selectedGrade]);

  const handleQuizChange = (index, value) => {
    const updatedAnswers = { ...quizAnswers, [index]: value };
    setQuizAnswers(updatedAnswers);
    localStorage.setItem(`geometryAppQuizAnswers_${selectedGrade}`, JSON.stringify(updatedAnswers));
  };

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    let feedbackMessage = "";
    let correctCount = 0;
    
    quizzes[selectedGrade]?.forEach((quiz, index) => {
      if (quizAnswers[index] === quiz.correctAnswer) {
        feedbackMessage += `Question ${index + 1}: Correct!\n`;
        correctCount++;
      } else {
        feedbackMessage += `Question ${index + 1}: Incorrect. The correct answer is ${quiz.correctAnswer}.\n`;
      }
    });
    
    feedbackMessage += `\nYou got ${correctCount} out of ${quizzes[selectedGrade]?.length} correct!`;
    setFeedback(feedbackMessage);
    
    // Clear saved quiz answers after submission
    localStorage.removeItem(`geometryAppQuizAnswers_${selectedGrade}`);
    // But keep the answers in state for display purposes
  };

  const handleGradeChange = (e) => {
    setSelectedGrade(e.target.value);
    setFeedback('');
    
    // Load quiz answers for the selected grade
    const savedQuizAnswers = localStorage.getItem(`geometryAppQuizAnswers_${e.target.value}`);
    if (savedQuizAnswers) {
      try {
        setQuizAnswers(JSON.parse(savedQuizAnswers));
      } catch (e) {
        console.error('Error parsing saved quiz answers:', e);
        setQuizAnswers({});
      }
    } else {
      setQuizAnswers({});
    }
  };

  // Store active section in localStorage
  useEffect(() => {
    const savedSection = localStorage.getItem('geometryAppActiveSection');
    if (savedSection) {
      setActiveSection(savedSection);
    }
  }, []);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    localStorage.setItem('geometryAppActiveSection', section);
  };

  // Star rating component
  const StarRating = ({ rating, onRatingChange }) => {
    return (
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= rating ? 'filled' : 'empty'}`}
            onClick={() => onRatingChange(star)}
          >
            {star <= rating ? '★' : '☆'}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="geometry-container">
      <div className="tabs">
        <button 
          className={activeSection === 'lecture' ? 'active' : ''}
          onClick={() => handleSectionChange('lecture')}
        >
          Lecture
        </button>
        <button 
          className={activeSection === 'assignment' ? 'active' : ''}
          onClick={() => handleSectionChange('assignment')}
        >
          Assignment
        </button>
        <button 
          className={activeSection === 'quiz' ? 'active' : ''}
          onClick={() => handleSectionChange('quiz')}
        >
          Quiz
        </button>
        <button 
          className={activeSection === 'comments' ? 'active' : ''}
          onClick={() => handleSectionChange('comments')}
        >
          Comments
        </button>
      </div>

      <div className="grade-selector">
        <label>Select Grade: </label>
        <select onChange={handleGradeChange} value={selectedGrade}>
          <option value="grade1">Grade 1</option>
          <option value="grade2">Grade 2</option>
          <option value="grade3">Grade 3</option>
          <option value="grade4">Grade 4</option>
        </select>
      </div>

      {loading && <p className="loading-message">Loading content...</p>}
      {error && <p className="error-message">{error}</p>}

      {activeSection === 'lecture' && (
        <section className="lecture">
          <h2>Lecture: Geometry</h2>
          <div className="lecture-content">
            <p>{lectures[selectedGrade]}</p>
          </div>
        </section>
      )}

      {activeSection === 'assignment' && (
        <section className="assignment">
          <h2>Assignment</h2>
          <form onSubmit={handleAssignmentSubmit}>
            <textarea
              value={assignment}
              onChange={handleAssignmentChange}
              placeholder="Type your assignment here..."
              rows="6"
            />
            <button type="submit">Submit Assignment</button>
          </form>
        </section>
      )}

      {activeSection === 'quiz' && (
        <section className="quiz">
          <h2>Quiz</h2>
          <form onSubmit={handleQuizSubmit}>
            {quizzes[selectedGrade]?.map((quiz, index) => (
              <div key={index} className="quiz-question">
                <p>{index + 1}. {quiz.question}</p>
                <input
                  type="text"
                  value={quizAnswers[index] || ""}
                  onChange={(e) => handleQuizChange(index, e.target.value)}
                  placeholder="Your answer"
                />
              </div>
            ))}
            <button type="submit">Submit Quiz</button>
          </form>
          {feedback && (
            <div className="feedback">
              <h3>Quiz Results</h3>
              <pre>{feedback}</pre>
            </div>
          )}
        </section>
      )}

      {activeSection === 'comments' && (
        <section className="comments">
          <h2>Comments</h2>
          <form onSubmit={handleCommentSubmit} className="comment-form">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input 
                type="text" 
                id="username"
                name="username"
                value={commentData.username}
                onChange={handleCommentChange}
                placeholder="Enter your username"
                required
              />
            </div>
            
            <div className="form-group">
              <label>Rating:</label>
              <StarRating 
                rating={commentData.rating} 
                onRatingChange={handleRatingChange} 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="comment">Comment:</label>
              <textarea
                id="comment"
                name="comment"
                value={commentData.comment}
                onChange={handleCommentChange}
                placeholder="Type your comment here..."
                rows="4"
                required
              />
            </div>
            
            <button type="submit">Submit Comment</button>
          </form>
          
          <div className="comments-list">
            <h3>Previous Comments ({comments.length})</h3>
            {comments.length > 0 ? (
              comments.map((cmt) => (
                <div key={cmt.id} className="comment-item">
                  <div className="comment-header">
                    <span className="username">{cmt.username}</span>
                    <span className="rating">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < cmt.rating ? 'star filled' : 'star empty'}>
                          {i < cmt.rating ? '★' : '☆'}
                        </span>
                      ))}
                    </span>
                    <span className="date-time">{cmt.date} at {cmt.time}</span>
                    <button 
                      className="delete-btn" 
                      onClick={() => handleDeleteComment(cmt.id)}
                      aria-label="Delete comment"
                    >
                      ×
                    </button>
                  </div>
                  <p className="comment-text">{cmt.comment}</p>
                </div>
              ))
            ) : (
              <p className="no-comments">No comments yet. Be the first to comment!</p>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default Geometry;