import { createTheme, ThemeProvider } from '@mui/material'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './styles/globalStyle'

const theme = createTheme({
  palette: {
    primary: {
      main: '#5F6CAF',
    },
    secondary: {
      main: '#5BBFBA',
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </StyledThemeProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
