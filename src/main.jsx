import React from "react";
import ReactDOM from "react-dom/client";
import {  RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { ClerkProvider, SignIn, SignUp } from '@clerk/clerk-react'
 
import App from "./App.jsx";
import "./index.css";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
{
path: '/',
element:<App/>,
errorElement: <div className="flex flex-col items-center justify-center h-screen text-4xl m-6 p-4"> 404 not found!</div>
},{
path: '/login',
element: <SignIn mode="model" />
},
{
  path: '/signup',
  element: <SignUp mode="model" />
}

]);

  

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 <ClerkProvider publishableKey={PUBLISHABLE_KEY}>

      <RouterProvider router={router}/>
      </ClerkProvider>

  </React.StrictMode>
);
