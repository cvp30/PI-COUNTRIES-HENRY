import { Home } from '../Pages/Home';
import { LayoutHome } from '../Pages/LayoutHome';
import { CountryDetail } from '../Pages/CountryDetail';
import { Activities } from '../Pages/Activities';

import { createBrowserRouter } from 'react-router-dom';
import { getDetailCountry } from '../utils';
import { ActivityForm } from '../Pages/ActivityForm';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutHome />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ':id',
        element: <CountryDetail />,
        loader: getDetailCountry,
      },
      {
        path: 'activities',
        element: <Activities />,
      },
      {
        path: 'new-activity',
        element: <ActivityForm />,
      }
    ]
  }
])