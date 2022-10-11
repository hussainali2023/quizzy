import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Questions = ({ qna }) => {
  // console.log(qna);
  console.log(qna);
  const { question, options, correctAnswer, id } = qna;
  const [ans, setAns] = useState();

  const ansCheck = (option) => {
    setAns(option);
    if (option === correctAnswer) {
      toast.success("Correct Ans", { autoClose: 1000 });
    } else {
      toast.error("🦄 Wrong Answers", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div>
        <h1 className="text-2xl font-semibold text-center">
          {question.replace(/(<([^>]+)>)/gi, "")}
        </h1>

        <div>
          {options.map((option) => (
            <h1 className="justify-center flex">
              <input
                className=" flex"
                type="radio"
                // name="question"
                name={id}
                onChange={(e) => ansCheck(option)}
              />
              <p key={option} className=" align-center">
                {option}
              </p>
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
