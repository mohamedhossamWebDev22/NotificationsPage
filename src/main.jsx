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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNYxVQubuSxQKhGTfn1cZ_Yb0qz1wAvq4",
  authDomain: "notificationspage-51cb6.firebaseapp.com",
  projectId: "notificationspage-51cb6",
  storageBucket: "notificationspage-51cb6.appspot.com",
  messagingSenderId: "950818359912",
  appId: "1:950818359912:web:83319196b524c8613289dd",
  measurementId: "G-CF5HFY6FH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
