import { Navigate } from 'react-router'
import DashboardPage from './pages/DashboardPage.jsx'
import PublicationDetailsPage from './pages/PublicationDetailsPage.jsx'
import CoursesPage from './pages/CoursesPage.jsx'

export const routes = [
    {path: '/dashboard/publications/:subject?/:category?', element: <DashboardPage/>},
    {path: '/', element: <Navigate to={'/dashboard/publications/'}/>},
    {path: '/publication/details/:id', element: <PublicationDetailsPage/>},
    {path: '/subjects', element: <CoursesPage/>}
]