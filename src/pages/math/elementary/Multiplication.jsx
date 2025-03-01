import React, { useState, useEffect } from 'react';
import '../math.css';

const Multiplication = () => {
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
    grade1: "Multiplication in Grade 1: Learning to multiply numbers from 1-10.",
    grade2: "Multiplication in Grade 2: Working with multiplication tables up to 12.",
    grade3: "Multiplication in Grade 3: Multiplying larger numbers and understanding properties.",
    grade4: "Multiplication in Grade 4: Solving multi-step multiplication problems."
  });
  const [quizzes] = useState({
    grade1: [
      { question: "What is 2 x 3?", correctAnswer: "6" },
      { question: "What is 4 x 5?", correctAnswer: "20" }
    ],
    grade2: [
      { question: "What is 6 x 7?", correctAnswer: "42" },
      { question: "What is 8 x 9?", correctAnswer: "72" }
    ],
    grade3: [
      { question: "What is 12 x 12?", correctAnswer: "144" },
      { question: "What is 15 x 10?", correctAnswer: "150" }
    ],
    grade4: [
      { question: "What is 25 x 4?", correctAnswer: "100" },
      { question: "What is 30 x 3?", correctAnswer: "90" }
    ]
  });

  // Load comments from localStorage on component mount
  useEffect(() => {
    const savedComments = localStorage.getItem('multiplicationAppComments');
    if (savedComments) {
      try {
        setComments(JSON.parse(savedComments));
      } catch (e) {
        console.error('Error parsing saved comments:', e);
        localStorage.removeItem('multiplicationAppComments');
      }
    }
  }, []);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('multiplicationAppComments', JSON.stringify(comments));
  }, [comments]);

  // Store assignment in localStorage
  useEffect(() => {
    const savedAssignment = localStorage.getItem('multiplicationAppAssignment');
    if (savedAssignment) {
      setAssignment(savedAssignment);
    }
  }, []);

  const handleAssignmentChange = (e) => {
    const newAssignment = e.target.value;
    setAssignment(newAssignment);
    localStorage.setItem('multiplicationAppAssignment', newAssignment);
  };

  const handleAssignmentSubmit = (e) => {
    e.preventDefault();
    alert("Assignment submitted successfully!");
    setAssignment('');
    localStorage.removeItem('multiplicationAppAssignment');
  };

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setCommentData({
      ...commentData,
      [name]: value
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
      localStorage.setItem('multiplicationAppComments', JSON.stringify(updatedComments));
      
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
      localStorage.setItem('multiplicationAppComments', JSON.stringify(updatedComments));
    }
  };

  // Store quiz answers in localStorage
  useEffect(() => {
    const savedQuizAnswers = localStorage.getItem(`multiplicationAppQuizAnswers_${selectedGrade}`);
    if (savedQuizAnswers) {
      try {
        setQuizAnswers(JSON.parse(savedQuizAnswers));
      } catch (e) {
        console.error('Error parsing saved quiz answers:', e);
      }
    }
  }, [selectedGrade]);

  useEffect(() => {
    localStorage.setItem(`multiplicationAppQuizAnswers_${selectedGrade}`, JSON.stringify(quizAnswers));
  }, [quizAnswers, selectedGrade]);

  const handleQuizChange = (index, value) => {
    setQuizAnswers({ ...quizAnswers, [index]: value });
  };

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    let feedbackMessage = "";
    quizzes[selectedGrade]?.forEach((quiz, index) => {
      if (quizAnswers[index] === quiz.correctAnswer) {
        feedbackMessage += `Question ${index + 1}: Correct!\n`;
      } else {
        feedbackMessage += `Question ${index + 1}: Incorrect. The correct answer is ${quiz.correctAnswer}.\n`;
      }
    });
    setFeedback(feedbackMessage);
  };

  return (
    <div className="multiplication-container">
      <div className="tabs">
        <button onClick={() => setActiveSection('lecture')}>Lecture</button>
        <button onClick={() => setActiveSection('assignment')}>Assignment</button>
        <button onClick={() => setActiveSection('quiz')}>Quiz</button>
        <button onClick={() => setActiveSection('comments')}>Comments</button>
      </div>

      {activeSection === 'lecture' && (
        <section className="lecture">
          <h2>Lecture: Multiplication</h2>
          <label>Select Grade: </label>
          <select onChange={(e) => setSelectedGrade(e.target.value)} value={selectedGrade}>
            <option value="grade1">Grade 1</option>
            <option value="grade2">Grade 2</option>
            <option value="grade3">Grade 3</option>
            <option value="grade4">Grade 4</option>
          </select>
          <p>{lectures[selectedGrade]}</p>
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
          <button onClick={handleAssignmentSubmit}>Submit Assignment</button>
        </section>
      )}

      {activeSection === 'quiz' && (
        <section className="quiz">
          <h2>Quiz</h2>
          <form onSubmit={handleQuizSubmit}>
            {quizzes[selectedGrade]?.map((quiz, index) => (
              <div key={index}>
                <p>{quiz.question}</p>
                <input
                  type="text"
                  value={quizAnswers[index] || ""}
                  onChange={(e) => handleQuizChange(index, e.target.value)}
                />
              </div>
            ))}
            <button type="submit">Submit Quiz</button>
          </form>
          {feedback && <pre>{feedback}</pre>}
        </section>
      )}

      {activeSection === 'comments' && (
        <section className="comments">
          <h2>Comments</h2>
          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              name="username"
              value={commentData.username}
              onChange={handleCommentChange}
              placeholder="Username"
            />
            <textarea
              name="comment"
              value={commentData.comment}
              onChange={handleCommentChange}
              placeholder="Type your comment here..."
            />
            <button type="submit">Submit Comment</button>
          </form>
          <div className="comments-list">
            {comments.map((cmt, index) => (
              <div key={index} className="comment">
                <p><strong>{cmt.username}</strong> ({cmt.date} {cmt.time})</p>
                <p>{cmt.comment}</p>
                <button onClick={() => handleDeleteComment(cmt.id)}>Delete</button>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Multiplication;