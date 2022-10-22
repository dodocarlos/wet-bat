import React from 'react'

import { Button, FormControl, Grid, InputLabel, MenuItem } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { Home } from '@mui/icons-material'

import { CustomTextField, CustomSelect } from './styles'
import Card from '../../../components/Card'

export default function NewQuote() {
  return (
    <Card title='Quick quote' icon={Home} showRefreshButton={false}>
      <form>
        <Grid container spacing={1} sx={{ backgroundColor: 'white' }}>
          <Grid item md={6}>
            <CustomTextField type='text' label='From' />
          </Grid>

          <Grid item md={6}>
            <CustomTextField type='text' label='Destination' />
          </Grid>

          <Grid item md={6}>
            <DatePicker
              disablePast
              label='Depart date'
              onChange={(e) => console.log(e)}
              value=''
              renderInput={(params) => <CustomTextField {...params} />}
            />
          </Grid>

          <Grid item md={6}>
            <DatePicker
              disablePast
              label='Return date'
              onChange={(e) => console.log(e)}
              value=''
              renderInput={(params) => <CustomTextField {...params} />}
            />
          </Grid>

          <Grid item md={6}>
            <CustomTextField type='number' label='People' />
          </Grid>

          <Grid item md={6}>
            <FormControl fullWidth>
              <InputLabel id='transportation'>Transportation</InputLabel>
              <CustomSelect
                labelId='transportation'
                id='transportation'
                value={{}}
                label='Transportation'
                onChange={(e) => console.log(e)}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </CustomSelect>
            </FormControl>
          </Grid>

          <Grid item md={6}>
            <CustomTextField type='text' label='Name' />
          </Grid>

          <Grid item md={6}>
            <CustomTextField type='email' label='E-mail' />
          </Grid>

          <Grid item md={6}></Grid>

          <Grid item md={6}>
            <Button
              color='secondary'
              variant='contained'
              sx={{
                borderRadius: '30px',
                color: 'white',
                padding: 2,
                width: '100%',
              }}
            >
              Create a quote
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  )
}
