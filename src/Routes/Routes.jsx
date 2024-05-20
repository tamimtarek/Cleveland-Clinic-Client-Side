import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error/Error"
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRoute from "./PrivetRoute"
import AddService from "../Pages/AddService/AddService";
import CardDetails from "../Pages/CardDetails/CardDetails";
import Service from "../Pages/Home/Service/Service";
import ManageService from "../Pages/Home/ManageService/ManageService";
import UpdateService from "../Pages/UpdateService/UpdateService";
import BookedService from "../Pages/BookedService/BookedService";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/addservice",
          element: <PrivetRoute><AddService></AddService></PrivetRoute>
        },
        {
          path: "/details/:id",
          element: <PrivetRoute><CardDetails></CardDetails></PrivetRoute>,
          loader: () => fetch("http://localhost:5000/services")
        },
        {
          path: "/service",
          element: <PrivetRoute><Service></Service></PrivetRoute>
        },
        {
          path: "/manageservice",
          element: <PrivetRoute><ManageService></ManageService></PrivetRoute>
        },
        {
          path: "/updateservice/:id",
          element: <PrivetRoute><UpdateService></UpdateService></PrivetRoute>,
          loader: () => fetch("http://localhost:5000/services")
        },
        {
          path: "/booknow/:id",
          element: <PrivetRoute><BookedService></BookedService></PrivetRoute>
        }
      ]
    },
  ]);

  export default router;