import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./index.css";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Support } from "./pages/Support";
import { Playlists } from "./pages/Playlists";
import { Songs } from "./pages/Songs";

import { SongProvider } from "./contexts/SongContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import { PlaylistIdContextProvider } from "./contexts/PlaylistIdContext";
import { Profile } from "./pages/Profile";

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
        element: <Songs />,
      },
      {
        path: "perfil",
        element: <Profile />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <PlaylistIdContextProvider>
        <SongProvider>
          <Toaster />
          <RouterProvider router={router} />
        </SongProvider>
      </PlaylistIdContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
