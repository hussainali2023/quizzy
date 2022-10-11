// import logo from "./logo.svg";
import { RouterProvider } from "react-router";
import "./App.css";
import Root from "./components/Root";
import router from "./components/Routes";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
