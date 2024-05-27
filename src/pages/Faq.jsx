import React, { useState } from 'react';
import './Faq.css'; // Import the CSS file for styling

export default function FaqPage() {
  const [showAnswers, setShowAnswers] = useState({});

  const toggleAnswer = (index) => {
    setShowAnswers((prevShowAnswers) => ({
      ...prevShowAnswers,
      [index]: !prevShowAnswers[index],
    }));
  };

  return (
    <div className="faq-container">
      {faqData.map((faqItem, index) => (
        <div className="faq-item" key={index}>
          <h2
            className="question"
            onClick={() => toggleAnswer(index)}
            style={{ cursor: 'pointer' }}
          >
            {faqItem.question}
          </h2>
          {showAnswers[index] && <p className="answer">{faqItem.answer}</p>}
        </div>
      ))}
    </div>
  );
}

const faqData = [
  {
    question: 'Question 1?',
    answer: 'Answer to question 1.',
  },
  {
    question: 'Question 2?',
    answer: 'Answer to question 2.',
  },
  {
    question: 'Question 3?',
    answer: 'Answer to question 3.',
  },
  // Add more FAQ items as needed
];