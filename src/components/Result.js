import React from "react";

const Result = ({ answers, finalScore }) => {
  return (
    <div className="result-container">
      <div className="score-container">
        <div className="score-circle">{finalScore}%</div>
        <div className="strategy-text">
          Strategy needs improvement
        </div>
      </div>

      <div className="answers-container">
        <h3>Your Answers:</h3>
        <div className="answer-list">
          {answers.map((answer, index) => (
            <div key={index} className="answer-item">
              <span className="answer-number">{index + 1}.</span>
              <span className="answer-text">{answer}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Result;
