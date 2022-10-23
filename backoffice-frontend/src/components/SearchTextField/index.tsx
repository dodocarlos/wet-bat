import React from 'react'
import { InputAdornment, TextField } from '@mui/material'
import { Search as SearchIcon, TempleHindu } from '@mui/icons-material'

export default function SearchTextField() {
  return (
    <TextField
      size='small'
      variant='outlined'
      sx={{
        marginRight: '50px',
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        ),
        sx: (theme) => ({
          backgroundColor: theme.palette.primary.contrastText,
          width: '400px',
          borderRadius: theme.shape.borderRadius,
        }),
      }}
    />
  )
}
