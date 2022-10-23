import { ElementType } from 'react'

import {
  Home,
  AttachMoney,
  ListAlt,
  FlightTakeoff,
  InsertDriveFile,
  Analytics,
  Group,
  Settings,
  Support,
} from '@mui/icons-material'

interface MenuItem {
  icon: ElementType
  title: string
  path: string
  divider?: boolean
}

const menuItems: MenuItem[] = [
  {
    icon: Home,
    title: 'Home',
    path: '/',
  },
  {
    icon: AttachMoney,
    title: 'Quotes',
    path: '/quotes',
  },
  {
    icon: ListAlt,
    title: 'Leaders',
    path: '/',
  },
  {
    icon: FlightTakeoff,
    title: 'Tours',
    path: '/',
    divider: true,
  },
  {
    icon: InsertDriveFile,
    title: 'Invoices',
    path: '/',
  },
  {
    icon: Analytics,
    title: 'Analytics',
    path: '/',
  },
  {
    icon: Group,
    title: 'Team',
    path: '/',
  },
  {
    icon: Settings,
    title: 'Admin',
    path: '/',
  },
  {
    icon: Support,
    title: 'Support',
    path: '/',
  },
]

export { menuItems }
