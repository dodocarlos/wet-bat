import React from 'react'

import { Restore } from '@mui/icons-material'
import Card from '../../../../components/Card'
import { Box } from '@mui/system'
import QuotesDataGrid from '../../../../components/QuotesDataGrid'

export default function PendingQuotesCard() {
  return (
    <Card title='Peding quotes' icon={Restore} showRefreshButton={false}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
        }}
      >
        <QuotesDataGrid />
      </Box>
    </Card>
  )
}
