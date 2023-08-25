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
import ImageLayout from "./layouts/ImageLayout"

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
          { path: "/", element: <Home /> },
          { path: "/cities", element: <Cities /> },
          { path: "/city/:city_id", element: <CityDetail />},
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
      path: "/",
      element: <ImageLayout />,
      children: [
        { path: "/signin", element: <SignIn />},
        { path: "/signup", element: <SignUp />},
      ],
    },
    
    {
      path: "/itineraries",
      element: <Itineraries />
    }
  ]);

export default router;