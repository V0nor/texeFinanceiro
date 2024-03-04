import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/global.css';
import Root from './routes/root';
import Error from './pages/error';
import UserProfile from './components/userProfile';
import UsersList from './components/usersList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
  },
  {
    path: '/user',
    element: <UserProfile />,
  },
  {
    path: '/users',
    element: <UsersList />,
  },
]);

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
