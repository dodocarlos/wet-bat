import React from 'react'

import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material'
import { Menu as MenuIcon, Mail, Notifications, Settings, Home } from '@mui/icons-material'
import SearchTextField from '../../components/SearchTextField'

const drawerWidth = 240

export default function AuthenticatedLayout({ children }: React.PropsWithChildren) {
  return (
    <Paper>
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <AppBar position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='open drawer'
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' noWrap component='div'>
              Wet Bat
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <SearchTextField />
            <Box sx={{ display: 'flex' }}>
              <IconButton size='large' aria-label='notifications' color='inherit'>
                <Notifications />
              </IconButton>
              <IconButton size='large' aria-label='mails' color='inherit'>
                <Mail />
              </IconButton>
              <IconButton size='large' aria-label='mails' color='inherit'>
                <Settings />
              </IconButton>
              <IconButton size='large' edge='end' aria-label='current user' color='inherit'>
                <Avatar src='https://avatars.githubusercontent.com/u/8847934?v=4' />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
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
              <ListItem disablePadding sx={(theme) => ({ color: theme.palette.primary.main })}>
                <ListItemButton>
                  <ListItemIcon sx={{ color: 'inherit', minWidth: '35px' }}>
                    <Home />
                  </ListItemIcon>
                  <ListItemText primary='Home' />
                </ListItemButton>
              </ListItem>
            </List>
            {/* <Divider />
          <List>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Mail />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </List> */}
          </Box>
        </Drawer>
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            p: 2,
            paddingTop: '80px',
          }}
        >
          {children}
        </Box>
      </Box>
    </Paper>
  )
}
