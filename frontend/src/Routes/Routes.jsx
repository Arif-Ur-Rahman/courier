import { createBrowserRouter } from "react-router-dom";
 
 
import Hompage from "../Pages/Hompage";
import Home from "../components/Home";
import HomeCover from "../components/HomeCover";
import UserDashboard from "../Pages/UserDashboard";
import Login from "../components/LoginSignUp/Login";
import Signup from "../components/LoginSignUp/Signup";
import Addparcel from "../Pages/Parcel/Addparcel";
import Label from "../Pages/Parcel/Label";
import Invoice from "../Pages/Parcel/Invoice";
import Pricing from "../components/Pricing/Pricing";
import PricingCal from "../Pages/Pricing/PricingCal";
import UploadPage from "../Pages/Bulk/Uploadpage";
import DataDisplay from "../Pages/Bulk/DataDisplay";
import ConsignmentDisplay from "../Pages/Consignments/ConsignmentDisplay";
import ConDetails from "../Pages/Consignments/ConDetails";
import UpdateParcel from "../Pages/Parcel/UpdateParcel";
 

 

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
      {
        path: '/pricing',
        element: <Pricing></Pricing>
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
          },
          {
            path: 'updateparcel/:id',
            element: <UpdateParcel></UpdateParcel>
          },
          {
            path: 'label/:id',
            element: <Label></Label>
          },
          {
            path: 'invoice/:id',
            element: <Invoice></Invoice>

          },
          {
            path: 'price',
            element: <PricingCal></PricingCal>,
          },
          {
            path: 'fileup',
            element: <UploadPage></UploadPage>
          },
          {
            path: 'imported',
            element: <DataDisplay></DataDisplay>
          },
          {
            path: 'con-details',
            element: <ConsignmentDisplay></ConsignmentDisplay>
          },
          {
            path: 'con-unique/:id',
            element: <ConDetails></ConDetails>

          },
        ]
      }
       
    ],
  },
]);

export default router;

      