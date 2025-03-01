import React, { useState } from 'react';
import '../conventional/conventional.css'; // Import the CSS file

const Grade6 = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResults, setQuizResults] = useState(null);

  const categories = [
    {
      name: 'Ratio',
      lectures: [
        {
          title: 'Lecture 1: Introduction to Ratios',
          video: 'https://www.youtube.com/embed/xA435umOQuw',
          text: 'In this lecture, you will learn the basics of ratios, including how to compare quantities and express relationships between them.',
          quiz: [
            {
              question: 'What is the ratio of 10 apples to 5 oranges?',
              options: ['2:1', '1:2', '5:10', '10:5'],
              answer: '2:1',
            },
            {
              question: 'If the ratio of boys to girls is 3:4, how many boys are there if there are 12 girls?',
              options: ['9', '12', '16', '18'],
              answer: '9',
            },
          ],
        },
        {
          title: 'Lecture 2: Solving Ratio Problems',
          video: 'https://www.youtube.com/embed/AL0-0f9azNos',
          text: 'This lecture covers how to solve problems using ratios, including proportional relationships and applications of ratios in real-world situations.',
          quiz: [
            {
              question: 'If 2 cups of flour are needed for 3 cookies, how many cups are needed for 12 cookies?',
              options: ['6', '8', '10', '12'],
              answer: '8',
            },
          ],
        },
      ],
    },
    {
      name: 'Percentage',
      lectures: [
        {
          title: 'Lecture 1: Understanding Percentages',
          video: 'https://www.youtube.com/embed/AL0-0f9azNos',
          text: 'In this lecture, you will learn how percentages are used to express parts of a whole, including how to calculate percentages and convert between percentages, fractions, and decimals.',
          quiz: [
            {
              question: 'What is 20% of 50?',
              options: ['10', '20', '30', '40'],
              answer: '10',
            },
          ],
        },
        {
          title: 'Lecture 2: Calculating Percentages',
          video: 'https://www.youtube.com/embed/GB1p4I0_ynE',
          text: 'This lecture teaches you how to calculate percentages in various contexts, such as finding the percentage of a number and calculating percentage increase or decrease.',
          quiz: [
            {
              question: 'If a shirt costs $40 and is on sale for 25% off, how much is the discount?',
              options: ['$10', '$15', '$20', '$25'],
              answer: '$10',
            },
          ],
        },
      ],
    },
    {
      name: 'Division with Fractions',
      lectures: [
        {
          title: 'Lecture 1: Dividing Fractions',
          video: 'https://www.youtube.com/embed/dividing-fractions-video',
          text: 'This lecture teaches you how to divide fractions and simplify the results.',
          quiz: [
            {
              question: 'What is 1/2 ÷ 1/4?',
              options: ['2', '1/2', '1/8', '4'],
              answer: '2',
            },
          ],
        },
        {
          title: 'Lecture 2: Word Problems with Fractions',
          video: 'https://www.youtube.com/embed/fraction-word-problems-video',
          text: 'Learn how to apply fraction division to real-world problems.',
          quiz: [
            {
              question: 'If a recipe calls for 1/3 cup of sugar and you want to make 1/2 of the recipe, how much sugar do you need?',
              options: ['1/6', '1/3', '1/2', '2/3'],
              answer: '1/6',
            },
          ],
        },
      ],
    },
  ];

  
  const toggleCategory = (categoryName) => {
    setActiveCategory(activeCategory === categoryName ? null : categoryName);
  };

  const handleLectureClick = (lecture) => {
    setSelectedLecture(lecture);
    setShowQuiz(false);
    setQuizAnswers({});
    setQuizResults(null);
  };

  const handleQuizAnswer = (questionIndex, answer) => {
    setQuizAnswers((prev) => ({
      ...prev,
      [questionIndex]: answer,
    }));
  };

  const submitQuiz = () => {
    const results = selectedLecture.quiz.map((question, index) => ({
      ...question,
      userAnswer: quizAnswers[index],
      isCorrect: quizAnswers[index] === question.answer,
    }));
    setQuizResults(results);
  };

  return (
    <div className="grade6-container">
      {/* Left Side: Lecture List */}
      <div className="grade6-lecture-list">
        <h2>Grade 6 Mathematics</h2>
        {categories.map((category, index) => (
          <div key={index}>
            <button
              className="grade6-category-button"
              onClick={() => toggleCategory(category.name)}
            >
              {category.name} {activeCategory === category.name ? '▼' : '▶'}
            </button>
            {activeCategory === category.name && (
              <ul>
                {category.lectures.map((lecture, idx) => (
                  <li
                    key={idx}
                    className="grade6-lecture-item"
                    onClick={() => handleLectureClick(lecture)}
                  >
                    {lecture.title}
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
            <h2>{selectedLecture.title}</h2>

            {/* Video Section */}
            {selectedLecture.video && (
              <div className="grade6-video-section">
                <h3>Video Lesson</h3>
                <iframe
                  width="560"
                  height="315"
                  src={selectedLecture.video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            {/* Text Content */}
            <div className="grade6-text-content">
              <div dangerouslySetInnerHTML={{ __html: selectedLecture.text }} />
            </div>

            {/* Quiz Button */}
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
                {selectedLecture.quiz.map((question, index) => (
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
                ))}
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