import React, { useState } from 'react';
import './grade6.css'; // Import the CSS file

const Grade6 = () => {
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResults, setQuizResults] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  // Lecture data with YouTube video IDs
  const lectures = {
    1: {
      title: 'Number Sense and Variable Expressions',
      subtopics: {
        1.1: {
          title: 'Whole Number Addition',
          content: 'This lecture covers the basics of adding whole numbers. Practice problems will help you master this skill.',
          videoId: 'UCBXoLb2ItI', // YouTube video ID
          quiz: [
            {
              question: 'What is 25 + 37?',
              options: ['52', '62', '72', '82'],
              answer: '62',
            },
            {
              question: 'What is 89 + 14?',
              options: ['93', '103', '113', '123'],
              answer: '103',
            },
          ],
        },
        1.2: {
          title: 'Whole Number Subtraction',
          content: 'This lecture covers the basics of subtracting whole numbers. Practice problems will help you master this skill.',
          videoId: 'HAhg0uXn9GA', // YouTube video ID
          quiz: [
            {
              question: 'What is 50 - 23?',
              options: ['27', '37', '47', '57'],
              answer: '27',
            },
            {
              question: 'What is 100 - 45?',
              options: ['45', '55', '65', '75'],
              answer: '55',
            },
          ],
        },
      },
    },
    2: {
      title: 'Statistics and Measurement',
      subtopics: {
        2.1: {
          title: 'Customary Units of Length',
          content: 'This lecture covers customary units of length such as inches, feet, and yards.',
          videoId: '9VKbD2oxHpk', // YouTube video ID
          quiz: [
            {
              question: 'How many inches are in a foot?',
              options: ['10', '12', '14', '16'],
              answer: '12',
            },
            {
              question: 'How many feet are in a yard?',
              options: ['2', '3', '4', '5'],
              answer: '3',
            },
          ],
        },
        2.2: {
          title: 'Metric System',
          content: 'This lecture covers the metric system and its units of measurement.',
          videoId: '101JtxnyMQE', // YouTube video ID
          quiz: [
            {
              question: 'What is the base unit of length in the metric system?',
              options: ['Meter', 'Liter', 'Gram', 'Second'],
              answer: 'Meter',
            },
            {
              question: 'How many centimeters are in a meter?',
              options: ['10', '100', '1000', '10000'],
              answer: '100',
            },
          ],
        },
      },
    },
  };

  // Function to handle lecture selection
  const handleLectureSelect = (lectureKey) => {
    setSelectedLecture(lectureKey);
    setShowQuiz(false);
    setQuizAnswers({});
    setQuizResults(null);
  };

  // Function to handle quiz answer selection
  const handleQuizAnswer = (questionIndex, answer) => {
    setQuizAnswers((prev) => ({
      ...prev,
      [questionIndex]: answer,
    }));
  };

  // Function to submit the quiz
  const submitQuiz = () => {
    const results = lectures[selectedLecture.split('.')[0]].subtopics[selectedLecture].quiz.map(
      (question, index) => ({
        ...question,
        userAnswer: quizAnswers[index],
        isCorrect: quizAnswers[index] === question.answer,
      })
    );
    setQuizResults(results);
  };

  // Function to toggle category
  const toggleCategory = (categoryKey) => {
    setActiveCategory(activeCategory === categoryKey ? null : categoryKey);
  };

  return (
    <div className="grade6-container">
      {/* Left Side: Lecture List */}
      <div className="grade6-lecture-list">
        <h2>Grade 6 Mathematics</h2>
        {Object.entries(lectures).map(([key, lecture]) => (
          <div key={key}>
            <button
              className="grade6-category-button"
              onClick={() => toggleCategory(key)}
            >
              {lecture.title} {activeCategory === key ? '▼' : '▶'}
            </button>
            {activeCategory === key && (
              <ul>
                {Object.entries(lecture.subtopics).map(([subKey, subtopic]) => (
                  <li
                    key={subKey}
                    className={`grade6-lecture-item ${
                      selectedLecture === subKey ? 'active' : ''
                    }`}
                    onClick={() => handleLectureSelect(subKey)}
                  >
                    {subtopic.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Right Side: Lecture Content and Quiz */}
      <div className="grade6-lecture-content">
        {selectedLecture ? (
          <>
            <h2>
              Lecture: {lectures[selectedLecture.split('.')[0]].subtopics[selectedLecture].title}
            </h2>
            {/* YouTube Video Embed */}
            {lectures[selectedLecture.split('.')[0]].subtopics[selectedLecture].videoId && (
            
              <div className="video-container">
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${lectures[selectedLecture.split('.')[0]].subtopics[selectedLecture].videoId}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            <p>
              {lectures[selectedLecture.split('.')[0]].subtopics[selectedLecture].content}
            </p>
            <button
              className="grade6-take-quiz-button"
              onClick={() => setShowQuiz(true)}
            >
              Take Quiz
            </button>

            {/* Quiz Section */}
            {showQuiz && (
              <div className="grade6-quiz-section">
                <h2>Quiz</h2>
                {lectures[selectedLecture.split('.')[0]].subtopics[selectedLecture].quiz.map(
                  (question, index) => (
                    <div key={index} className="grade6-quiz-question">
                      <p>{question.question}</p>
                      {question.options.map((option, optionIndex) => (
                        <label key={optionIndex} className="grade6-quiz-option">
                          <input
                            type="radio"
                            name={`question-${index}`}
                            value={option}
                            onChange={() => handleQuizAnswer(index, option)}
                            checked={quizAnswers[index] === option}
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  )
                )}
                <button
                  className="grade6-submit-quiz-button"
                  onClick={submitQuiz}
                >
                  Submit Quiz
                </button>
              </div>
            )}

            {/* Quiz Results */}
            {quizResults && (
              <div className="grade6-quiz-results">
                <h2>Quiz Results</h2>
                {quizResults.map((result, index) => (
                  <div key={index} className="grade6-quiz-result-item">
                    <p>
                      <strong>Question {index + 1}:</strong> {result.question}
                    </p>
                    <p>
                      <strong>Your Answer:</strong> {result.userAnswer || 'Not answered'}
                    </p>
                    <p>
                      <strong>Correct Answer:</strong> {result.answer}
                    </p>
                    <p>
                      <strong>Result:</strong>{' '}
                      <span
                        className={
                          result.isCorrect ? 'grade6-correct' : 'grade6-incorrect'
                        }
                      >
                        {result.isCorrect ? 'Correct' : 'Incorrect'}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <h2>Please select a lecture from the left.</h2>
        )}
      </div>
    </div>
  );
};

export default Grade6;