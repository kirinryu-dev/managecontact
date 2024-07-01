import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Root from './utils/root';
import Error from './error/error-page';
import Contact from './utils/Contact';

import { createBrowserRouter , RouterProvider  } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />

  },

  {
    path: 'utils/Contact:contactId',
    element: <Contact />,
    errorElement: <Error />,

  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


