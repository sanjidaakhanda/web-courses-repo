import React from "react";
import { Link } from "react-router-dom";
const Topic = ({ topic }) => {
  console.log(topic);
  const { logo, name, id, total } = topic;
  return (
    <div className="topic">
      <img src={logo} alt="" />
      <p>{name}</p>
      <p>Total quiz:{total}</p>
      <Link to={`/topic/${id}`}>
        <button>Start Quiz</button>
      </Link>
    </div>
  );
};

export default Topic;
