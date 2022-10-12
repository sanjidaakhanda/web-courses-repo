import React from "react";
import { useLoaderData } from "react-router-dom";
const Static = () => {
  const statics = useLoaderData();
  console.log(statics);
  return (
    <div>
      <h1>total quzies:{statics.data.length}</h1>
    </div>
  );
};

export default Static;
