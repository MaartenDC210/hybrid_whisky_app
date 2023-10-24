import { createBrowserRouter } from "react-router-dom";
import { Home } from "../Pages/Home/home";
import { Inventory } from "../Pages/Inventory/inventory";
import { EmptyBottles } from "../Pages/EmptyBottles/emptyBottles";
import { Recommendations } from "../Pages/Recommendations/recommendations";
import { Login } from "../Pages/Login/login";
import { WhiskyDetails } from "../Pages/WhiskeyDetails/whiskeyDetails";
import { MainLayout } from "../Layout/MainLayout"
import AuthRoute from "../Components/authRoute";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
        errorElement: "Error",
        children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "inventory",
          element: 
            <AuthRoute>
              <Inventory/>
            </AuthRoute>,
        },
        {
          path: "empty-bottles",
          element: 
          <AuthRoute>
            <EmptyBottles/>
          </AuthRoute>,
        },
        {
          path: "recommendations",
          element: 
          <AuthRoute>
            <Recommendations/>
          </AuthRoute>,
        },
        {
          path:"whisky-details",
          element: <WhiskyDetails/>,
        },
        {
          path: "login",
          element: 
          <AuthRoute>
            <Login />
          </AuthRoute>,
        },]
    },
]);
