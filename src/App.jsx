import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";
import Gigs from "./pages/gigs/Gigs";
import JoinSeller from "./pages/join-seller/JoinSeller";
import Orders from "./pages/orders/Orders"
import About from "./pages/about/About"
import Payment from "./pages/payment/Payment"
import Message from "./pages/message/Message"
import Messages from "./pages/messages/Messages"
import Login from "./pages/login/Login"
import Gig from "./pages/gig/Gig"
import "./App.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

function App() {
  const Layout = () =>{
    return(
      <div>
        <Navbar />
        <Outlet />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element: <Home/>,
        },
        {
          path:"/category",
          element: <Category />,
        },
        {
          path:"/gigs",
          element: <Gigs/>,
        },
        {
          path:"/orders",
          element: <Orders/>,
        },
        {
          path:"/About-us",
          element: <About/>,
        },
        {
          path:"/join-seller",
          element: <JoinSeller/>,
        },
        {
          path:"/login",
          element: <Login />,
        },
        {
          path:"/payment",
          element: <Payment/>,
        },
        {
          path:"/message/:id",
          element: <Message/>,
        },
        {
          path:"/messages",
          element: <Messages/>,
        },
        {
          path:"/gig/:id",
          element: <Gig/>,
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
