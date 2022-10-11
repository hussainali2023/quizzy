import { createBrowserRouter } from "react-router-dom";
import AllQuiz from "./AllQuiz";
import Blog from "./Blog";
import ErrorPage from "./ErrorPage";
import Root from "./Root";
import Statistics from "./Statistics";
import Topics from "./Topics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    // loader: async () => fetch("https://openapi.programming-hero.com/api/quiz"),
    children: [
      {
        path: "/",
        element: <Topics></Topics>,
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      {
        path: "/topics",
        element: <Topics></Topics>,
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      {
        path: "/topic/:topicId",
        element: <AllQuiz></AllQuiz>,
        loader: async ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.topicId}`
          ),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
