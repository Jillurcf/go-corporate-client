import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Layout/Root";
import EroorPage from "../Pages/ErrorPage/EroorPage";
import Home from "../Pages/Home/Home";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <EroorPage></EroorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }
    ]
  },
]);



export default router;
