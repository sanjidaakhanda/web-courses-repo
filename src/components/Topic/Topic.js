import React from "react";

const Topic = ({ topic }) => {
  console.log(topic);
  const { logo, name } = topic;
  return (
    <div className="topic">
      <img src={logo} alt="" />
      <p>Name:{name}</p>
    </div>
  );
};

export default Topic;
