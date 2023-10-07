import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Layout/Root";
import EroorPage from "../Pages/ErrorPage/EroorPage";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Services from "../Pages/Services/Services";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ServiceDetail from "../Pages/Services/ServiceDetail";



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
        path: "/services",
        element: <Services></Services>
      }
      ,{
        path: "/aboutus",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("/service.json")
        
      },
      {
        path:'/serviceDetail/:id',
        element: <ServiceDetail></ServiceDetail>,
        loader: ()=> fetch('/service.json')

      },
      {
        path: "contact",
        element: <ContactUs></ContactUs>
      }

    ]
  },
]);



export default router;
