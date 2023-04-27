import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import './index.css';

import { Home } from './pages/Premium';
import { SignUp } from './pages/SignUp';
import { Login } from './pages/Login';
// import { Support } from './pages/Support';
// import { Playlists } from './pages/Playlists';
// import { Songs } from './pages/Songs';

const router = createBrowserRouter([
  {
    path: '/premium',
    element: <Home />,
  },
  {
    path: 'signup',
    element: <SignUp />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  // {
  //   path: 'support',
  //   element: <Support />,
  // },
  // {
  //   path: 'playlists',
  //   children: [
  //     {
  //       index: true,
  //       element: <Playlists />,
  //     },
  //     {
  //       path: ':id',
  //       element: <Songs />,
  //     },
  //   ],
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>
);
