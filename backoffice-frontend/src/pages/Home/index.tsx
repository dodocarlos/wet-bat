import React from 'react'

import { Grid } from '@mui/material'

import NewQuote from '../Quotes/NewQuote'

export default function Home() {
  return (
    <Grid container spacing={1}>
      <Grid item md={4}>
        <NewQuote />
      </Grid>
    </Grid>
  )
}
