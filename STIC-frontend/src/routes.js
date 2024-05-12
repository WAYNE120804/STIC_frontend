import { element } from 'prop-types'
import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Farm = React.lazy(() => import('./views/management/farms/farm'))
const farmForm = React.lazy(() => import('./views/management/farms/farmform'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/farms', name: 'Farms', exact: true },
  { path: '/farms/farm', name: 'Farm', element: farm },
  { path: '/farms/farmForm', name: 'farmForm', element: farmForm },
]

export default routes
