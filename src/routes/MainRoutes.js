import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import Inbox from 'views/Inbox';

// const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const DashBoard = Loadable(lazy(() => import('views/Dashboard')));
const Scroller = Loadable(lazy(() => import('views/Scroller')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    // element: <SamplePage />,
    children: [
        // {
        //     path: '/test',
        //     element: <SamplePage />
        // },
        {
            path: '/dashboard',
            element: <DashBoard />
        },
        {
            path: '/inbox',
            element: <Inbox />
        },
        {
            path: '/scroller',
            element: <Scroller />
        }
    ]
};

export default MainRoutes;
