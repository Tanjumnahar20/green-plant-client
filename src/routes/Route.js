import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import About from "../pages/About/About";
import Products from "../pages/Home/Products/Products";
import ContactUs from "../pages/ContactUs/ContactUs";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Cart from "../pages/Carts/Cart";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Payment from "../pages/DashBoard/Payment/Payment";
import Dashboard from "../pages/DashBoard/DashBoard";
import PaymentHistory from "../pages/DashBoard/PaymentHistory/PaymentHistory";

// router
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path:'signup',
        element:<SignUp></SignUp>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      // {
      //   path:'carts',
      //   element:<PrivateRoute><Cart></Cart></PrivateRoute>
      // },
      // {
      //   path:'payment',
      //   element:<Payment></Payment>
      // },
    ],
  },
  {
    path:'/dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
    {
      path:'carts',
      element:<Cart></Cart>
    },
    {
      path:'/dashboard/payment',
      element:<Payment></Payment>
    },
    {
      path:'/dashboard/paymenthistory',
      element:<PaymentHistory></PaymentHistory>
    }
    ]
  }
 
]);

export default router;
