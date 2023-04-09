import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ContextIdPlaylistProvider from './contexts/ContextIdPlaylist';

import './index.css';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Support } from './pages/Support';
import { Playlists } from './pages/Playlists';

const router = createBrowserRouter([
  {
    path: '/',
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
  {
    path: 'support',
    element: <Support />,
  },
  {
    path: 'playlists',
    element: <Playlists />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextIdPlaylistProvider>
      <RouterProvider router={router} />
    </ContextIdPlaylistProvider>
  </React.StrictMode>
);
