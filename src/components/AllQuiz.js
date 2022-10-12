import React from "react";
import { useLoaderData } from "react-router";
import Questions from "./Questions";

const AllQuiz = () => {
  const quizes = useLoaderData();
  const { name, questions } = quizes.data;
  //   console.log(quizes);
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center mb-12">
        Quiz Of <span className=" text-green-700">{name}</span>
      </h1>
      {questions.map((qna) => (
        <Questions key={qna.id} qna={qna}></Questions>
      ))}
    </div>
  );
};

export default AllQuiz;
