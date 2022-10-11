import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  // console.log(topic);
  const { id, name, logo } = topic;
  return (
    <div className=" p-10 bg-blue-100 rounded-md mb-10">
      <img src={logo} alt="" />
      <p className="text-xl text-center my-10">{name}</p>
      <Link to={`/topic/${id}`}>
        <button className=" w-full py-3 bg-orange-400 font-semibold text-white hover:bg-blue-100 hover:text-black hover: border border-orange-400 rounded-lg">
          Start Quiz
        </button>
      </Link>
    </div>
  );
};

export default Topic;
