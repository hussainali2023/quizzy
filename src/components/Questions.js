import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EyeIcon } from "@heroicons/react/24/solid";

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

  const showAnswer = () => {
    toast.info(correctAnswer, { autoCloseL: 1000 });
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

      <div className=" mb-8 bg-blue-100 md:mx-20 lg:mx-36 p-6 rounded-md">
        <h1 className="text-2xl font-semibold text-center mb-6">
          {question.replace(/(<([^>]+)>)/gi, "")}
        </h1>
        <EyeIcon
          onClick={showAnswer}
          className="h-6 w-6 text-lime-900 relative left-3/4 cursor-pointer"
        />

        <div className="justify-center align-center ">
          {options.map((option) => (
            <h1 className=" flex align-middle">
              <input
                className=" flex text-lg"
                type="radio"
                // name="question"
                name={id}
                onChange={(e) => ansCheck(option)}
              />
              <p className=" text-lg ml-2">{option}</p>
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
