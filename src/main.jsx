import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Support } from "./pages/Support";
import { Playlists } from "./pages/Playlists";
import { Songs } from "./pages/Songs";

import { PauseProvider } from "./contexts/PauseContext";
import { PlaylistIdContextProvider } from "./contexts/PlaylistIdContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "support",
    element: <Support />,
  },
  {
    path: "playlists",
    children: [
      {
        index: true,
        element: <Playlists />,
      },
      {
        path: ":id",
        element: (
          <PauseProvider>
            <Songs />
          </PauseProvider>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PlaylistIdContextProvider>
      <RouterProvider router={router} />
    </PlaylistIdContextProvider>
  </React.StrictMode>
);
