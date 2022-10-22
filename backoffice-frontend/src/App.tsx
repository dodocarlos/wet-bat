import React from 'react'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import AuthenticatedLayout from './layouts/Authenticated'
import Home from './pages/Home'

function App() {
  return (
    <div className='App'>
      <AuthenticatedLayout>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Home />
        </LocalizationProvider>
      </AuthenticatedLayout>
    </div>
  )
}

export default App
