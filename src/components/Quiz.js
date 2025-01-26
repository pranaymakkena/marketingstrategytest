import React, { useState, useEffect } from "react";
import Question from "./Question";
import Result from "./Result";

const questions = [
  { question: "What is your primary marketing goal?", options: ["Increase sales", "Brand awareness", "Lead generation", "Customer retention"] },
  { question: "Which platform do you focus on the most?", options: ["Social Media", "Email Marketing", "SEO", "Paid Ads"] },
  { question: "What is your advertising budget per month?", options: ["$0-$500", "$500-$5000", "$5000-$50,000", "$50,000+"] },
  { question: "What type of content performs best for you?", options: ["Blog posts", "Videos", "Infographics", "Podcasts"] },
  { question: "How do you measure marketing success?", options: ["Revenue growth", "Leads generated", "Website traffic", "Social media engagement"] },
  { question: "Do you use influencer marketing?", options: ["Yes", "No", "Planning to start", "Not sure"] },
  { question: "What is your ideal customer base?", options: ["B2B", "B2C", "Both", "Not sure"] },
  { question: "Which email marketing strategy do you use?", options: ["Newsletters", "Promotions", "Drip campaigns", "None"] },
  { question: "How often do you post on social media?", options: ["Daily", "Weekly", "Monthly", "Rarely"] },
  { question: "What is your biggest marketing challenge?", options: ["Budget", "Audience targeting", "Content creation", "Lead conversion"] }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [quizFinished, setQuizFinished] = useState(false);
  const [finalScore, setFinalScore] = useState(null);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setQuizFinished(true);
      calculateScore();
    }
  }, [timeLeft]);

  const handleAnswerClick = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
      calculateScore();
    }
  };

  const calculateScore = () => {
    const baseScore = 60;
    const variableScore = Math.floor(Math.random() * 21);
    setFinalScore(baseScore + variableScore);
  };

  return (
    <div>
      {!quizFinished && <p className="timer">Time Left: {timeLeft}s</p>}
      {quizFinished ? (
        <Result answers={answers} finalScore={finalScore} />
      ) : (
        <Question
          questionData={questions[currentQuestion]}
          onAnswerClick={handleAnswerClick}
        />
      )}
    </div>
  );
};

export default Quiz;
