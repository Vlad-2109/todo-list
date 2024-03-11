import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../pages/mainPage/mainPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  /*{
    path: '/primary',
    element: <PrimaryPage />,
    children: [
      {
        path: 'instructors',
        element: <InstructorsPage />,
      },
    ],
  },*/
]);
