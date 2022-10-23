import React, { useState } from 'react'

import { Box } from '@mui/material'

import QuotesDataGrid from '../../components/QuotesDataGrid'
import QuoteDetailsDialog from '../../components/QuoteDetailsDialog'

export default function Quotes() {
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [selectedQuoteId, setSelectedQuoteId] = useState(-1)

  const handleCloseDetails = () => {
    setDetailsOpen(false)
  }

  return (
    <>
      <Box
        p={2}
        sx={(theme) => ({
          backgroundColor: 'white',
          width: '100%',
          height: '100%',
          borderRadius: theme.shape.borderRadius,
          boxSizing: 'border-box',
        })}
      >
        <QuotesDataGrid
          onActionClick={(id) => {
            setSelectedQuoteId(id as number)
            setDetailsOpen(true)
          }}
        />
      </Box>
      <QuoteDetailsDialog
        quoteId={selectedQuoteId}
        onClose={handleCloseDetails}
        open={detailsOpen}
      />
    </>
  )
}
