import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { ThemeProvider } from '@mui/material'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { GlobalStyle } from './styles/globalStyle'
import { theme } from './styles/theme'

import AuthenticatedLayout from './layouts/Authenticated'
import Routes from './Routes'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <GlobalStyle />
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <AuthenticatedLayout>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Routes />
                </LocalizationProvider>
                <ToastContainer />
              </AuthenticatedLayout>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </StyledThemeProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
