import React from "react";
import "./Home.css";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
const Home = () => {
  const topics = useLoaderData();
  console.log(topics);
  return (
    <div className="home-container">
      <div className="home-pic">
        <img
          src="https://img.freepik.com/free-photo/intellectual-banknote-student-sand-computer-graphic_1134-1185.jpg?w=1060&t=st=1665548854~exp=1665549454~hmac=490fb631c2451ec73ea372e7015edad6cc56f090826c4dd8a57be7250b393f46"
          alt=""
        />
        <div className="home-picP">
          <h3>
            Time to do something special in your life.be smart and work hard.
          </h3>
        </div>
      </div>
      <div className="home-topics">
        {topics.data.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Home;
