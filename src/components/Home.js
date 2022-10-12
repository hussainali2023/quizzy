import React from "react";
import { useLoaderData } from "react-router";
import HeaderPage from "./HeaderPage";
import Topic from "./Topic";

const Home = () => {
  const topics = useLoaderData();
  return (
    <div>
      <HeaderPage></HeaderPage>
      <div className=" mx-5 md:mx-20 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 sm:grid grid-cols-1 md:gap-10 ">
        {topics.data.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Home;
