import React from "react";
import { useLoaderData } from "react-router-dom";
const Static = () => {
  const statics = useLoaderData();
  return (
    <div>
      <h1>total quzies:{statics.length}</h1>
    </div>
  );
};

export default Static;
