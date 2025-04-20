import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Movie from "./pages/Movie.jsx";
import Directors from "./pages/Directors.jsx";
import Actors from "./pages/Actors.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
  {
    path: "/directors",
    element: <Directors />,
  },
  {
    path: "/actors",
    element: <Actors />,
  },
]);

export default routes;
