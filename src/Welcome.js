import React from "react";

const Welcome = ({ onStart }) => {
  return (
    <div>
      <h1>Welcome to the Marketing Strategy Quiz</h1>
      <p>Test your marketing knowledge in just 60 seconds!</p>
      <button className="option-button" onClick={onStart}>Start Quiz</button>
    </div>
  );
};

export default Welcome;
