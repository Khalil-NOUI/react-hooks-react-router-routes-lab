import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import ErrorPage from "./pages/ErrorPage";

const routes = [
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: "/movie/:title",
      element: <Movie />
    },
    {
      path: "/directors",
      element: <Directors />
    },
    {
      path:"/actors",
      element: <Actors />
    },
    {
      path:"bad-route",
      // eslint-disable-next-line react/style-prop-object
      element: <ErrorPage style="padding: 2px 4px; background-color: rgba(200, 200, 200, 0.5);" />
    },
  ]

export default routes;