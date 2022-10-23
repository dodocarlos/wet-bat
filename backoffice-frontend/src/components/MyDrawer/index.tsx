import React from 'react'

import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIcon,
  Toolbar,
} from '@mui/material'
import { menuItems } from '../../config/drawer-menu'
import { Link } from 'react-router-dom'

const drawerWidth = 180

export default function MyDrawer() {
  return (
    <Drawer
      variant='permanent'
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        ['& .MuiDrawer-paper']: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List
          sx={{
            backgroundColor: '#e6e6e6',
          }}
        >
          {menuItems.map((item, idx) => (
            <div key={idx}>
              <Link to={item.path} style={{ textDecoration: 'none' }}>
                <ListItem
                  disablePadding
                  sx={(theme) => ({
                    color: theme.palette.primary.main,
                    marginBottom: '15px',
                  })}
                  alignItems='center'
                >
                  <ListItemButton>
                    <ListItemIcon sx={{ color: 'inherit', minWidth: '35px' }}>
                      <SvgIcon component={item.icon} />
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </ListItem>
              </Link>
              {item.divider && <Divider sx={{ marginBottom: '15px' }} />}
            </div>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}
