import React from "react";
import "./Quiz.css";
const Quiz = ({ quiz }) => {
  const { correctAnswer, options, question } = quiz;
  return (
    <div className="quiz">
      <h1 className="question">Question----{question}</h1>
      <h3 className="option"> Options--{options}</h3>
      <h4 className="correct">CorrectAns---{correctAnswer}</h4>
    </div>
  );
};

export default Quiz;
