import React from "react";
import "./Quiz.css";
const Quiz = ({ quiz }) => {
  const { correctAnswer, options, question } = quiz;
  return (
    <div className="quiz">
      <h1 className="question">Question----{question.slice(3, -4)}</h1>
      <li className="option"> Options--{options}</li>
      <h4 className="correct">CorrectAns---{correctAnswer}</h4>
    </div>
  );
};

export default Quiz;
