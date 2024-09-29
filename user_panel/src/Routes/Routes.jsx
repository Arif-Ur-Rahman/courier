import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Hompage from "../Hompage";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
          path: '/',
          element: <Hompage></Hompage>,
        },
    ]
    },
    ]);

export default router;
      