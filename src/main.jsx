import React from "react";
import ReactDOM from "react-dom/client";
import {  RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { ClerkProvider,  SignIn, SignUp } from '@clerk/clerk-react'
 
import App from "./App.jsx";
import "./index.css";

import Thumbnail from "./components/Pages/Thumbnail.jsx";
import Logo from "./components/Pages/Logo.jsx";
import Animation from "./components/Pages/Logo.jsx";
import Illustration from "./components/Pages/Illustration.jsx";
import Brand from "./components/Pages/Brand.jsx";
import Advanced from "./components/Pages/Advanced.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
{
path: '/',
element:<App/>,
errorElement: <div className="grid h-screen place-content-center bg-white px-4 dark:bg-gray-900">
<h1 className="uppercase tracking-widest text-gray-500 dark:text-gray-400">404 | Not Found</h1>
</div>

},{
path: '/login',
element: <SignIn mode="model" />
},
{
  path: '/signup',
  element: <SignUp mode="model" />
},
{

  path:'/thumbnail',
  element: <Thumbnail/>

},
{
  path:'/logo',
  element:<Logo/>
},
{
  path:"/animation",
  element:<Animation/>
},
{
  path:"/illustrations",
  element:<Illustration/>
},
{
  path:"/brand",
  element:<Brand/>
},
{
  path:"/advanced",
  element:<Advanced/> // comment
}


]);

  

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 <ClerkProvider publishableKey={PUBLISHABLE_KEY}>

      <RouterProvider router={router}/>
      </ClerkProvider>

  </React.StrictMode>
);
