import { Select } from '@mui/material'
import styled from 'styled-components'

const CustomSelect = styled(Select)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.default,
}))

export default CustomSelect
