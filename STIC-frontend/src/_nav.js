import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDescription,
  cilSpeedometer,
  cilTerrain,
  cilCog,
  cilPeople
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />
  },
  {
    component: CNavTitle,
    name: 'Management'
  },
  {
    component: CNavGroup,
    name: 'Batchs',
    to:'/batches',
    icon: <CIcon icon={cilTerrain} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Batch',
        to:'/batches/batch'
      }
    ]
  },
  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav
