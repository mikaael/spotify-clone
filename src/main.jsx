import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import './index.css';

import { Home } from './pages/Premium';
import { SignUp } from './pages/SignUp';
import { Login } from './pages/Login';
import { Support } from './pages/Support';
import { Playlists } from './pages/Playlists';
import { Songs } from './pages/Songs';
import { SearchPlaylists } from './pages/SearchPlaylists';
import { Account } from './pages/Account';
import { Profile } from './pages/Profile';

import { PlaylistContainer } from './components/Playlists/PlaylistContainer';
import { PlaylistProviders } from './components/Playlists/PlaylistProviders';

const router = createBrowserRouter([
  {
    path: '/premium',
    element: <Home />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/support',
    element: <Support />,
  },
  {
    path: '/',
    element: (
      <PlaylistProviders>
        <PlaylistContainer />
      </PlaylistProviders>
    ),
    children: [
      {
        index: true,
        element: <Playlists />,
      },
      {
        path: '/:id',
        element: <Songs />,
      },
      {
        path: '/search',
        element: <SearchPlaylists />,
      },
      {
        path: '/account',
        element: <Account />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>
);
