import { createBrowserRouter } from 'react-router-dom';

import LayoutHome from '../pages/LayoutHome/LayoutHome';
import LandingPage from '../pages/LandingPage/LandingPage';
import Home from '../pages/Home/Home';
import Detail from '../pages/Detail/Detail';
import ActivityForm from '../pages/ActivityForm/ActivityForm';
import { getDetailCountry } from '../utils';


export const router = createBrowserRouter ([

    {
        path: '/',
        element: <LandingPage />,
        // errorElement: <NotFound />
    },
    {
        path: '/home',
        element: <LayoutHome />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: ':id',
                element: <Detail />,
                loader: getDetailCountry
            }

        ]
    },
    {
        path: '/activity',
        element: <ActivityForm />
    }
])