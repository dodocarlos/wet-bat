import React from 'react'

import { Grid } from '@mui/material'

import NewQuoteCard from '../Quotes/Components/NewQuoteCard'
import PendingQuotesCard from '../Quotes/Components/PendingQuotesCard'
import Banner from '../../components/Banner'

export default function Home() {
  return (
    <Grid container spacing={1}>
      <Grid item sm={12}>
        <Banner />
      </Grid>

      <Grid item sm={12} md={6} lg={4}>
        <NewQuoteCard />
      </Grid>

      <Grid item sm={12} md={6} lg={4}>
        <PendingQuotesCard />
      </Grid>
    </Grid>
  )
}
