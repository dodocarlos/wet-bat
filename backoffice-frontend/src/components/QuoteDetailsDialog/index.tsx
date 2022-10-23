import React from 'react'

import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  LinearProgress,
  Paper,
  Typography,
} from '@mui/material'
import { Close } from '@mui/icons-material'

import { useQuery } from '@tanstack/react-query'

import * as QuotesService from '../../services/quotes'
import { formatDate } from '../../utils/date'

interface Props {
  quoteId: number
  onClose: () => void
  open: boolean
}

export default function QuoteDetailsDialog({ quoteId, open, onClose }: Props) {
  const quoteQuery = useQuery(['quotes', quoteId], ({ queryKey }) =>
    QuotesService.getQuoteById(queryKey[1] as number),
  )

  return (
    <Dialog fullWidth open={open} onClose={onClose} maxWidth='lg'>
      <DialogTitle>
        Quote #{quoteId}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        {quoteQuery.isLoading ? (
          <LinearProgress color='secondary' />
        ) : (
          <Paper sx={{ backgroundColor: 'white', padding: 2 }}>
            <Grid container padding={2}>
              <Grid item sm={12}>
                <Typography variant='h5' color='secondary'>
                  Contact info
                </Typography>
                <Typography variant='body1'>
                  <b>{quoteQuery.data?.customer.name}</b>
                  <br />
                  {quoteQuery.data?.customer.email}
                  <br />
                </Typography>
              </Grid>

              <Grid item sm={12}>
                <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                <Typography variant='h5' color='secondary'>
                  Flight details
                </Typography>
              </Grid>

              <Grid item sm={6}>
                <Typography variant='subtitle1' color='secondary'>
                  Departure
                </Typography>
                <Typography variant='body1'>
                  <b>
                    {quoteQuery.data?.departure.name} ({quoteQuery.data?.departure.iataCode})
                  </b>
                  <br />
                  {quoteQuery.data?.departure.municipality}, {quoteQuery.data?.departure.region}
                  <br />
                </Typography>
              </Grid>

              <Grid item sm={6}>
                <Typography variant='subtitle1' color='secondary'>
                  Destination
                </Typography>
                <Typography variant='body1'>
                  <b>
                    {quoteQuery.data?.destination.name} ({quoteQuery.data?.destination.iataCode})
                  </b>
                  <br />
                  {quoteQuery.data?.destination.municipality}, {quoteQuery.data?.destination.region}
                  <br />
                </Typography>
              </Grid>

              <Grid item sm={12}>
                <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                <Typography variant='h5' color='secondary'>
                  Quote details
                </Typography>
                <Typography variant='body1'>
                  Departure date:{' '}
                  <b>
                    {quoteQuery.data?.departureDate &&
                      formatDate(new Date(quoteQuery.data?.departureDate))}
                  </b>
                  <br />
                  Return date:{' '}
                  <b>
                    {quoteQuery.data?.departureDate &&
                      formatDate(new Date(quoteQuery.data?.returnDate))}
                  </b>
                  <br />
                  Travelers: {quoteQuery.data?.numPeople}
                  <br />
                  Transportation: {quoteQuery.data?.transportation.name} (
                  {quoteQuery.data?.transportation.price})
                </Typography>
              </Grid>

              <Grid item sm={12}>
                <Divider sx={{ marginTop: 2, marginBottom: 4 }} />
                <Typography variant='h6' color='secondary'>
                  Total cost: {quoteQuery.data?.price}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        )}
      </DialogContent>
    </Dialog>
  )
}
