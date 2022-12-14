import React from 'react'

import { Box, Paper } from '@mui/material'
import MyDrawer from '../../components/MyDrawer'
import MyAppBar from '../../components/MyAppBar'

export default function AuthenticatedLayout({ children }: React.PropsWithChildren) {
  return (
    <Paper>
      <Box sx={{ display: 'flex', width: '100%', height: '100%', minHeight: '100vh' }}>
        <MyAppBar />
        <MyDrawer />
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
