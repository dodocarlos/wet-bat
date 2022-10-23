import React from 'react'

import { Home } from '@mui/icons-material'
import Card from '../../../../components/Card'
import NewQuote from '../../NewQuote'

export default function NewQuoteCard() {
  return (
    <Card title='Quick quote' icon={Home} showRefreshButton={false}>
      <NewQuote />
    </Card>
  )
}
