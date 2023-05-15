import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';

const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <SamplePage />,
    children: [
        {
            path: '/test',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
