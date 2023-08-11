import React from 'react'
import App from './App.jsx'
import './index.scss'

import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Nor from "./pages/nor";
import RA from "./pages/rA";

const router = createBrowserRouter([
  { 
    path: "/",
    element: <Nor />,
    errorElement: <>Error 404.</>,
  },
  {
    path: "/readAll",
    element: <RA />,
    errorElement: <>Error 404.</>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
