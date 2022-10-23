import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#5F6CAF',
    },
    secondary: {
      main: '#5BBFBA',
    },
    background: {
      default: '#efeff7',
      paper: '#efeff7',
    },
  },
  shape: {
    borderRadius: 3,
  },
})

export { theme }
