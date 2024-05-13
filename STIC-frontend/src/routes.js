import { element, exact } from 'prop-types'
import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Batch = React.lazy(() => import('./views/management/batches/batch/Batch'))
const BatchForm = React.lazy(() => import('./views/management/batches/batch/BatchForm'))
const BatchEditForm = React.lazy(() => import('./views/management/batches/batch/BatchEditForm'))
const Farm = React.lazy(() => import('./views/management/farms/farm'))
const farmEditForm = React.lazy(() => import('./views/management/batches/batch/BatchEditForm'))
//const FarmForm = React.lazy(() => import('./views/management/farms/farm/farmform'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/batches', name: 'Batches', exact: true },
  { path: '/batches/batch', name: 'Batch', element: Batch },
  { path: '/batches/batchform', name: 'BatchForm', element: BatchForm },
  { path: '/batches/batcheditform', name: 'BatchEditForm', element: BatchEditForm },
  { path: 'farms', name: 'farms', exact: true },
  { path: 'farms/farm', name: 'farm', element: Farm },
  { path: 'farms/farmform', name: 'farmform', element: FarmForm },
  { path: 'farms/farmEditForm', name: 'farmEditForm', element: farmEditForm },
]

export default routes
