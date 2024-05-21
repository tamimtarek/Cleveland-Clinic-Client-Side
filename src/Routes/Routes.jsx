import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Authencation/Login";
import Register from "../Pages/Authencation/Register";
import ViewDetails from "../Components/ViewDetails";
import AddService from "../Dashboard/AddService";
import ManageService from "../Dashboard/ManageService";
import BookedService from "../Dashboard/BookedService";
import Servicetodo from "../Dashboard/Servicetodo";
import PrivateRoute from "./privateRoute";
import Service from "../Components/Service";
import Error from "../Components/Error";
import Update from "../Components/Update";
import BookNow from "../Components/BookNow";
import Contact from "../Components/Contact";
// import Extraroute from "../Components/Extraroute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      // {
      //   path: "/extra",
      //   element: <Extraroute></Extraroute>,
      // },
      {
        path: "/update/:id",
        element: <Update></Update>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/booknow/:id",
        element: <BookNow></BookNow>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-one-plum.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/manageservice",
        element: (
          <PrivateRoute>
            <ManageService></ManageService>
          </PrivateRoute>
        ),
      },
      {
        path: "/bookedservice",
        element: (
          <PrivateRoute>
            <BookedService></BookedService>
          </PrivateRoute>
        ),
      },
      {
        path: "/servicetodo",
        element: (
          <PrivateRoute>
            <Servicetodo></Servicetodo>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-one-plum.vercel.app/services/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
