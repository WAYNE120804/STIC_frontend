import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDescription,
  cilSpeedometer,
  cilFastfood,
  cilEco,
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
    to:'/batchs',
    icon: <CIcon icon={cilTerrain} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Batch',
        to:'/batchs/batch'
      },
      {
        component: CNavItem,
        name: 'Spents',
        to:'/batchs/spents'
      }
    ]
  },
  {
    component: CNavGroup,
    name: 'Contractors',
    to:'/contractors',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />
  },
  {
    component: CNavGroup,
    name: 'Machineries',
    to:'/machineries',
    icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Machinery',
        to:'/machineries/machinery'
      },
      {
        component: CNavItem,
        name: 'Movements',
        to:'/machineries/movements'
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
