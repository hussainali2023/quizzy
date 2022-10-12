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
          2. How does context api works ?
        </h1>
        <p className=" text-sm lg:text-base">
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on.
          <br />
          React.createContext() is all you need. It returns a consumer and a
          provider. Provider is a component that as it's names suggests provides
          the state to its children. It will hold the "store" and be the parent
          of all the components that might need that store. Consumer as it so
          happens is a component that consumes and uses the state.
        </p>
      </div>
      <div className=" mt-6 bg-sky-100 p-6 rounded-md">
        <h1 className=" font-semibold text-lg mb-3 lg:text-2xl md:text-2xl lg:mb-6">
          3. useRef Hook in React Js.
        </h1>
        <p className=" text-sm lg:text-base">
          The useRef is a hook that allows to directly create a reference to the
          DOM element in the functional component. The useRef returns a mutable
          ref object. This object has a property called .current. The value is
          persisted in the refContainer.current property. These values are
          accessed from the current property of the returned object. The
          .current property could be initialised to the passed argument
          initialValue e.g. useRef(initialValue). The object can persist a value
          for a full lifetime of the component.
        </p>
      </div>
    </div>
  );
};

export default Blog;
