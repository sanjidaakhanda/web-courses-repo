import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import "./TopicDetail.css";
const TopicDetail = () => {
  const quizes = useLoaderData();
  console.log(quizes);
  return (
    <div className="topic-detail">
      {quizes.data.questions.map((quiz) => (
        <Quiz key={quiz.id} quiz={quiz}></Quiz>
      ))}
    </div>
  );
};

export default TopicDetail;
