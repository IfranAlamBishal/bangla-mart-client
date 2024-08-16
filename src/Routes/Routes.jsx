import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Layouts/Home/Home";
import Login from "../Layouts/LogInPage/Login";
import Register from "../Layouts/Register/Register";
const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/register",
      element: <Register></Register>
    }
  ]);

export default Routes;