import { Select, TextField } from '@mui/material'
import styled from 'styled-components'

const CustomTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.default,
}))

const CustomSelect = styled(Select)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.default,
}))

export { CustomTextField, CustomSelect }
