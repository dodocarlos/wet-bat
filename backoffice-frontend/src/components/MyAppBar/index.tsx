import React from 'react'

import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { Menu as MenuIcon, Mail, Notifications, Settings } from '@mui/icons-material'
import SearchTextField from '../../components/SearchTextField'

export default function MyAppBar() {
  return (
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
  )
}
