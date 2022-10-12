import React from "react";

const Blog = () => {
  return (
    <div className=" mx-3 md:mx-6 mt-10 lg:mt-20 md:mt-20 lg:mx-20 md:mx20 lg:bg-red-100 md:bg-red-100  md:p-10 rounded-md">
      <div className="  bg-sky-100 p-3 lg:p-6 md:p-6 rounded-md">
        <h1 className=" font-semibold text-lg mb-3 lg:text-2xl md:text-2xl lg:mb-6">
          1. What is the Purpose of React Router ?
        </h1>
        <p className=" text-sm lg:text-base">
          React Router is a standard library for routing in React. It enables
          the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL. Let us create a simple application to React to
          understand how the React Router works. The application will contain
          three components: home component, about a component, and contact
          component. We will use React Router to navigate between these
          components.
        </p>
      </div>
      <div className=" mt-6 bg-sky-100 p-6 rounded-md">
        <h1 className=" font-semibold text-lg mb-3 lg:text-2xl md:text-2xl lg:mb-6">
          2.
        </h1>
        <p className=" text-sm lg:text-base"></p>
      </div>
      <div className=" mt-6 bg-sky-100 p-6 rounded-md">
        <h1 className=" font-semibold text-lg mb-3 lg:text-2xl md:text-2xl lg:mb-6">
          3.
        </h1>
        <p className=" text-sm lg:text-base"></p>
      </div>
    </div>
  );
};

export default Blog;
