import { createBrowserRouter } from 'react-router-dom'
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Cities from "./pages/Cities"
import CityDetail from "./pages/CityDetail"
import NotFound from "./pages/NotFound"
import Itineraries from "./pages/Itineraries"
import NavLayout from "./layouts/NavLayout"
import MainLayout from "./layouts/MainLayout"

const router = createBrowserRouter([
    {
      path: "/pages",
      element: <MainLayout />,
      children: [
          { path: "/pages/signin", element: <SignIn />},
          { path: "/pages/signup", element: <SignUp />},
          { path: "/pages/cities", element: <Cities /> },
          { path: "/pages/city/:city_id", element: <CityDetail />},
          { path: "/pages/*", element: <NotFound />}
      ],
    },
    {
      path: "/",
      element: <NavLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/index", element: <Home />},
        { path: "/home", element: <Home />},
        { path: "/*", element: <NotFound />}
      ],
    },
    {
      path: "/itineraries",
      element: <Itineraries />
    }
  ]);

export default router;