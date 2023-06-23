import "./SCSS/App.scss";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@fontsource/bellefair";
import "@fontsource/barlow-condensed/100.css";
import "@fontsource/barlow-condensed/400.css";
import "@fontsource/barlow-condensed/700.css";

import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/destination",
      element: <Destination />,
    },
    {
      path: "/crew",
      element: <Crew />,
    },
    {
      path: "/technology",
      element: <Technology />,
    },
  ],
  { basename: import.meta.env.DEV ? "/" : "/space-tourism-vite-ts/" }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
