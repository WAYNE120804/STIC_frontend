import { element } from 'prop-types'
import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Batch = React.lazy(()=> import('./views/management/batches/batch/Batch'));
const BatchForm = React.lazy(()=> import('./views/management/batches/batch/BatchForm'));
const BatchEditForm = React.lazy(()=> import('./views/management/batches/batch/BatchEditForm'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/batches', name: 'Batches', exact: true },
  { path: '/batches/batch', name: 'Batch', element: Batch},
  { path: '/batches/batchform', name: 'BatchForm', element: BatchForm },
  { path: '/batches/batcheditform', name: 'BatchEditForm', element: BatchEditForm }
]

export default routes
