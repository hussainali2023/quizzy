import React from "react";

const HeaderPage = () => {
  return (
    <div className="md:grid grid-cols-2 md:gap-8 flex flex-wrap-reverse ">
      <div className=" ml-4 lg:ml-6 md:ml-8 md:px-4 lg:px-12 px-4 lg:py-32 rounded-sm">
        <h1 className="text-2xl lg:text-3xl md:text-2xl text-center mb-4 lg:mb-20 font-semibold">
          Web Development Quizzes
        </h1>
        <p className="mb-10 lg:text-xl ">
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

export default HeaderPage;
