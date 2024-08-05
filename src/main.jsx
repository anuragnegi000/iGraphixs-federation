import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { ClerkProvider, SignIn, SignUp } from "@clerk/clerk-react";

import App from "./App.jsx";
import "./index.css";
import WorkType from "./components/Pages/Work/WorkType.jsx";
import LogoAd from "./components/Pages/Work/LogoAd.jsx";
import AdvanceCreative from "./components/Pages/Work/AdvanceCreative.jsx";

import PrizeSection from "./components/Pages/Work/PrizeSection.jsx";

import { BrandComponent } from "./components/Benefits.jsx";
import { Modal } from "flowbite-react";
import SelectionProduct from "./components/SelectionProduct.jsx";
import Details1 from "./components/Pages/Details1.jsx";
import Details2 from "./components/Pages/Details2.jsx";
import Details3 from "./components/Pages/Details2.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <div className="grid h-screen place-content-center bg-white px-4 dark:bg-gray-900">
        <h1 className="uppercase tracking-widest text-gray-500 dark:text-gray-400">
          404 | Not Found
        </h1>
      </div>
    ),
  },
  {
    path: "/login",
    element: <SignIn mode="model" />,
  },
  {
    path: "/signup",
    element: <SignUp mode="model" />,
  },
  {
    path: "thumbnail",
  },
  {
    path: "/WorkType",
    element: <WorkType />,
  },
  {
    path: "/Logo",
    element: <LogoAd />,
  },
  {
    path: "/advanced",
    element: <AdvanceCreative />,
  },
  {
    path: "/pricing",
    element: <PrizeSection />,
  },
  {
    path: "/brand",
    element: <Modal />,
  },
  {
    path: "/Package pricing",
    element: <SelectionProduct />,
  },
  {
    path:"/details1",
    element:<Details1/>,
  },
  {
    path:"/details2",
    element:<Details2/>,
  },
  {
    path:"/details3",
    element:<Details3/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>,
);

{
  /*  


 default Benefits.jsx routers element path combination  
  {
    path: "/thumbnail",
    element: <Advanced />,
  },
  {
    path: "/ImageSelector",
    element: <h1>Image Selector </h1>,
  },
  {
    path: "/advanced",
    element: <Advanced />, // comment
  },
  {
    path: "/logo",
    element: <LogoPage />,
  },
  {
    path: "/illustration",
    element: <Illustration />,
  },
  {
    path: "/brand",
    element: <Brand />,
  },



*/
}
