import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Root from './pages/Root';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import User from './pages/User';
import SignIn from './pages/SignIn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // loader: rootLoader
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
        // loader: teamLoader,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'users/:id',
        element: <User />,
      },
    ],
  },
]);

// todo: add auth provider here or in main.tsx
const authenticated = true;

function App() {
  if (authenticated) {
    return (
      <>
        <RouterProvider router={router} />
      </>
    )
  }

  return <SignIn />
}

export default App
