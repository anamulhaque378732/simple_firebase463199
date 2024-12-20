
import { createRoot } from 'react-dom/client'
import './index.css'
import React from "react";
import { createBrowserRouter, } from "react-router";
import { RouterProvider } from 'react-router';
import Main from './layouts/Main';
import Home from './components/Home';
import Login from './components/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ]



  },
]);



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
