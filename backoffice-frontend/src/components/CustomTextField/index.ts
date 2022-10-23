import { TextField } from '@mui/material'
import styled from 'styled-components'

const CustomTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.default,
}))

export default CustomTextField
