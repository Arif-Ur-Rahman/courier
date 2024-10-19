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
import HistoryDisplay from "../Pages/User/HistoryDisplay";
import AdminDashboard from "../Admin_Panel/AdminDashboard";
import Apage from "../Admin_Panel/Apage";
import UserDisplay from "../Admin_Panel/Pages/UserDisplay";
import UpdateUser from "../Admin_Panel/Pages/User/Updateuser";
import PendingParcel from "../Admin_Panel/Pages/Status/PendingParcel";
import ApprovalParcel from "../Pages/Consignments/ApprovalParcel";
import CancellParcel from "../Pages/Consignments/CancellParcel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <HomeCover />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      // User routes part..............
      {
        path: "userboard",
        element: <UserDashboard />,
        children: [
          {
            path: "userpage",
            element: <Hompage />,
          },
          {
            path: "addparcel",
            element: <Addparcel />,
          },
          {
            path: "updateparcel/:id",
            element: <UpdateParcel />,
          },
          {
            path: "label/:id",
            element: <Label />,
          },
          {
            path: "invoice/:id",
            element: <Invoice />,
          },
          {
            path: "price",
            element: <PricingCal />,
          },
          {
            path: "fileup",
            element: <UploadPage />,
          },
          {
            path: "imported",
            element: <DataDisplay />,
          },
          {
            path: "con-details",
            element: <ConsignmentDisplay />,
          },
          {
            path: "con-unique/:id",
            element: <ConDetails />,
          },
          {
            path: "user-history/:email",
            element: <HistoryDisplay />,
          },
          {
            path: 'approval',
            element: <ApprovalParcel></ApprovalParcel>
          },
          {
            path: 'reject',
            element: <CancellParcel></CancellParcel>,
          },
        ],
      },
      // Admin routes..................part
      {
        path: "adminboard",
        element: <AdminDashboard />,
        children: [
          {
            path: "adminpage",
            element: <Apage />,
          },
          {
            path: 'user-display',
            element: <UserDisplay></UserDisplay>
          },
          {
            path: 'update-user/:id',
            element: <UpdateUser></UpdateUser>
          },
          {
            path: 'pending',
            element: <PendingParcel></PendingParcel>,
          },
        ],
      },
    ],
  },
]);

export default router;
