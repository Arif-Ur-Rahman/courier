import { createBrowserRouter } from "react-router-dom";
 
 
import Hompage from "../Pages/Hompage";
import Home from "../components/Home";
import HomeCover from "../components/HomeCover";
import UserDashboard from "../Pages/UserDashboard";
import Login from "../components/LoginSignUp/Login";
import Signup from "../components/LoginSignUp/Signup";
import Addparcel from "../Pages/Parcel/Addparcel";
 

 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        
            path: "/",
            element: <HomeCover></HomeCover>,
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>,
      },
      // User Panel routes..............bellow
      {
        path:'/userboard',
        element: <UserDashboard></UserDashboard>,
        children: [
          {
            path: 'userpage',
            element: <Hompage></Hompage>,
          },
          {
            path: 'addparcel',
            element: <Addparcel></Addparcel>
          }
        ]
      }
       
    ],
  },
]);

export default router;

      