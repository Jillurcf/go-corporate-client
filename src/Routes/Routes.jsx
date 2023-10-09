import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Layout/Root";
import EroorPage from "../Pages/ErrorPage/EroorPage";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Services from "../Pages/Services/Services";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ServiceDetail from "../Pages/Services/ServiceDetail";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import SpecialFeatures from "../Pages/Special/SpecialFeatures";
import SpecialOffer from "../Pages/Special/SpecialOffer";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <EroorPage></EroorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>
      },
    
      {
        path: '/services',
        element: <Services></Services>,
        // loader: ()=> fetch('/service.json')
        
      },
      {
        path:'/serviceDetail/:id',
        element: <PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
        loader: ()=> fetch('/service.json')

      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/specialfeatures",
        element: <PrivateRoute><SpecialFeatures></SpecialFeatures></PrivateRoute>,
        loader: () => fetch('/service.json')
      },
      {
        path: "specialoffer",
        element: <PrivateRoute><SpecialOffer></SpecialOffer></PrivateRoute>,
        
      }

    ]
  },
]);



export default router;
