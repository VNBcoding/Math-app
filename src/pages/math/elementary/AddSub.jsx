import React, { useState, useEffect } from 'react';
import './elementary.css';

const AddSub = () => {
  const [activeSection, setActiveSection] = useState('lecture');
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [feedback, setFeedback] = useState('');
  const [loading] = useState(false);
  const [error] = useState(null);

  const [lectures] = useState({
    grade1: {
      video: "https://www.youtube.com/embed/VScM8Z8Jls0",
      text: "In Grade 1, we learn the basics of addition and subtraction. We use counting strategies and number lines to solve problems with numbers from 1 to 20."
    },
    grade2: {
      video: "https://www.youtube.com/embed/rPVdItitgIU",
      text: "In Grade 2, we work with numbers up to 100. We learn place value concepts and how to add and subtract larger numbers."
    },
    grade3: {
      video: "https://www.youtube.com/embed/1Al2Fc3wOIQ",
      text: "In Grade 3, we work with larger numbers and multi-digit operations. We practice adding and subtracting numbers up to 1,000."
    },
    grade4: {
      video: "https://www.youtube.com/embed/KgZIXq04ee8",
      text: "In Grade 4, we solve multi-step problems and use mental math strategies. We work with numbers up to 10,000 and learn advanced addition and subtraction techniques."
    },
    grade5: {
      video: "https://www.youtube.com/embed/CvLmn4kjKVU",
      text: "In Grade 5, we tackle advanced problem-solving with large numbers. We learn to add and subtract numbers up to 100,000 and solve real-world problems."
    }
  });

  const [quizzes] = useState({
    grade1: [
      { question: "2 + 3 = _____", correctAnswer: "5" },
      { question: "5 + _____ = 10", correctAnswer: "5" },
      { question: "_____ + 4 = 9", correctAnswer: "5" },
      { question: "7 + _____ = _____", correctAnswer: "3,10" } // Example for multiple blanks
    ],
    grade2: [
      { question: "25 + 18 = _____", correctAnswer: "43" },
      { question: "50 - _____ = 26", correctAnswer: "24" },
      { question: "_____ + 17 = 56", correctAnswer: "39" }
    ],
    grade3: [
      { question: "125 + 238 = _____", correctAnswer: "363" },
      { question: "500 - _____ = 225", correctAnswer: "275" },
      { question: "_____ + 452 = 780", correctAnswer: "328" }
    ],
    grade4: [
      { question: "1254 + 879 = _____", correctAnswer: "2133" },
      { question: "2000 - _____ = 655", correctAnswer: "1345" },
      { question: "_____ + 2671 = 6999", correctAnswer: "4328" }
    ],
    grade5: [
      { question: "12345 + 6789 = _____", correctAnswer: "19134" },
      { question: "10000 - _____ = 4322", correctAnswer: "5678" },
      { question: "_____ + 5432 = 15308", correctAnswer: "9876" }
    ]
  });

  // Store quiz answers in localStorage
  useEffect(() => {
    const savedQuizAnswers = localStorage.getItem(`mathAppQuizAnswers_${selectedGrade}`);
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
    localStorage.setItem(`mathAppQuizAnswers_${selectedGrade}`, JSON.stringify(updatedAnswers));
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
    localStorage.removeItem(`mathAppQuizAnswers_${selectedGrade}`);
    // But keep the answers in state for display purposes
  };

  const handleGradeChange = (grade) => {
    setSelectedGrade(grade);
    setFeedback('');
    
    // Load quiz answers for the selected grade
    const savedQuizAnswers = localStorage.getItem(`mathAppQuizAnswers_${grade}`);
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
    const savedSection = localStorage.getItem('mathAppActiveSection');
    if (savedSection) {
      setActiveSection(savedSection);
    }
  }, []);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    localStorage.setItem('mathAppActiveSection', section);
  };

  return (
    <div className="addsub-container">
      <div className="grade-selector">
        <h2>Select Grade</h2>
        <ul className="grade-list">
          {[1, 2, 3, 4, 5].map(grade => (
            <li
              key={grade}
              className={`grade-item ${selectedGrade === `grade${grade}` ? 'active' : ''}`}
              onClick={() => handleGradeChange(`grade${grade}`)}
            >
              Grade {grade}
            </li>
          ))}
        </ul>
      </div>

      {selectedGrade && (
        <div className="content-container">
          <div className="tabs">
            <button 
              className={activeSection === 'lecture' ? 'active' : ''}
              onClick={() => handleSectionChange('lecture')}
            >
              Lecture
            </button>
            <button 
              className={activeSection === 'quiz' ? 'active' : ''}
              onClick={() => handleSectionChange('quiz')}
            >
              Quiz
            </button>
          </div>

          {loading && <p className="loading-message">Loading content...</p>}
          {error && <p className="error-message">{error}</p>}

          {activeSection === 'lecture' && (
            <section className="lecture">
              <h2>Lecture: Addition and Subtraction</h2>
              <div className="lecture-content">
                <div className="video-container">
                  <iframe
                    width="100%"
                    height="315"
                    src={lectures[selectedGrade].video}
                    title="Math Lecture Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p>{lectures[selectedGrade].text}</p>
              </div>
            </section>
          )}

          {activeSection === 'quiz' && (
            <section className="quiz">
              <h2>Quiz</h2>
              <form onSubmit={handleQuizSubmit}>
                {quizzes[selectedGrade]?.map((quiz, index) => (
                  <div key={index} className="quiz-question">
                    <p>
                      {quiz.question.split('_____').map((part, i) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < quiz.question.split('_____').length - 1 && (
                            <input
                              type="text"
                              value={quizAnswers[index] || ""}
                              onChange={(e) => handleQuizChange(index, e.target.value)}
                              placeholder="_____"
                              className="quiz-input"
                            />
                          )}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                ))}
                <button type="submit" className="quiz-submit-button">Submit Quiz</button>
              </form>
              {feedback && (
                <div className="feedback">
                  <h3>Quiz Results</h3>
                  <pre>{feedback}</pre>
                </div>
              )}
            </section>
          )}
        </div>
      )}
    </div>
  );
};

export default AddSub;