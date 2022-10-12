import React from "react";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="blog">
      <h1> Blog questions</h1>
      <h2>What is the purpose of react Router?</h2>
      <p>
        Answer--React Router is a standard library system built on top of the
        React and used to create routing in the React application using React
        Router Package.
      </p>
      <h2>How content API work?</h2>
      <p>
        An API, short for Application Programming Interface, is a
        software-to-software interface. APIs provide a secure and standardized
        way for applications to work with each other and deliver the information
        or functionality requested without user intervention.
      </p>
      <h2>How does href work in react?</h2>
      <p>
        This href attribute contains the URL or path to the destination page. It
        may be a relative URL or an absolute URL. In React, relative URLs should
        always be handled by the link tag provided by the React Router, and pure
        anchor tags should only be used for absolute paths.
      </p>
    </div>
  );
};

export default Blog;
