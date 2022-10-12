import React from "react";
import { Link } from "react-router-dom";
const Topic = ({ topic }) => {
  console.log(topic);
  const { logo, name, id } = topic;
  return (
    <div className="topic">
      <img src={logo} alt="" />
      <p>Name:{name}</p>
      <Link to={`/topic/${id}`}>
        <button>See Details</button>
      </Link>
    </div>
  );
};

export default Topic;
