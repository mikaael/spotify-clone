import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import { Home } from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Support from "./pages/Support";
import Playlists from "./pages/Playlists";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "support",
    element: <Support />,
  },
  {
    path: "playlists",
    element: <Playlists />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
