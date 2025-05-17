import { Navigate } from 'react-router'
import DashboardPage from './pages/DashboardPage.jsx'

export const routes = [
    {path: '/dashboard/publications', element: <DashboardPage/>},
    {path: '/', element: <Navigate to={'/dashboard/publications/'}/>},
]