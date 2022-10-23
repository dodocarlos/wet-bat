import React from 'react'

import { Grid } from '@mui/material'

import NewQuote from '../Quotes/NewQuote'

export default function Home() {
  return (
    <Grid container spacing={1}>
      <Grid item sm={12} md={6} lg={4}>
        <NewQuote />
      </Grid>
    </Grid>
  )
}
