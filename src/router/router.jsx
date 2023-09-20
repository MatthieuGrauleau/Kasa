import Home from '../pages/Home'
import Accommodation from '../pages/Accomodation'
import About from '../pages/About'
import Error from '../pages/Error'
import {createBrowserRouter} from "react-router-dom";





export const router = createBrowserRouter ([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/accomodation/:id",
      element: <Accommodation />,
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "*",
      element: <Error />
    },
  
  ]);