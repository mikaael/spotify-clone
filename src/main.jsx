import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import App from './App';
import ExamplePage from './pages/ExamplePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'example',
    element: <ExamplePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
