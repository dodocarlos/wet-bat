import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      'button:hover': {
        bgColor: 'transparent',
      },
      'button:focus': {
        bgColor: 'transparent',
      },
      'button:active': {
        bgColor: 'transparent',
      },
    },
  },
  colors: {
    primary: '#5F6CAF',
    primaryTextColor: '#FFF',
    secondary: '#5BBFBA',
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
