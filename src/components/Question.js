import React, { useState } from "react";

const Question = ({ questionData, onAnswerClick }) => {
  const { question, options } = questionData;
  const [hoveredOption, setHoveredOption] = useState(null); // Track hover for each question

  const handleHover = (index) => {
    setHoveredOption(index);
  };

  const handleMouseLeave = () => {
    setHoveredOption(null); // Reset hover when mouse leaves
  };

  return (
    <div className="question-container">
      <h2>{question}</h2>
      <div className="options-container">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              hoveredOption === index ? "hovered" : ""
            }`}
            onClick={() => onAnswerClick(option)}
            onMouseEnter={() => handleHover(index)} // Set hover state
            onMouseLeave={handleMouseLeave} // Reset hover state
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
