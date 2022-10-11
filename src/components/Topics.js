import React from "react";

const Topics = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className=" ml-12 px-12 py-32 rounded-sm">
        <h1 className="text-3xl text-center mb-20">Web Development Quizzes </h1>
        <p className=" text-xl">
          The internet connects everyone nowadays and web development is a huge
          part of our society. If you want to be well-known throughout the world
          then you should probably develop your own website or a web page. Our
          trivia on web development has questions about every aspect concerning
          web development nowadays and will test your knowledge on the matter.
          Can you face all these questions?
        </p>
      </div>
      <div>
        <img src="topics.jpg" alt="" />
      </div>
    </div>
  );
};

export default Topics;
