import React from 'react'

import {
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'

import { toast } from 'react-toastify'

import { useFormik } from 'formik'
import * as yup from 'yup'

import CustomTextField from '../../../components/CustomTextField'
import CustomSelect from '../../../components/CustomSelect'
import AirportSearchField from '../../../components/AirportSeachField'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import * as TransportationsService from '../../../services/transportations'
import * as QuotesService from '../../../services/quotes'
import { PostQuoteData } from '../../../services/quotes/types'

const validationSchema = yup.object({
  from: yup
    .object({ label: yup.string().required(), id: yup.string().uuid().required() })
    .required('Select the origin'),
  destination: yup
    .object({ label: yup.string().required(), id: yup.string().uuid().required() })
    .required('Select the destination'),
  departDate: yup.date().required('Enter the departure date'),
  returnDate: yup
    .date()
    .min(yup.ref('departDate'), 'Return date needs to be after departure date')
    .required('Enter the return date'),
  people: yup
    .number()
    .integer()
    .min(1, 'Travelers needs to be at least 1')
    .max(30, 'Travelers needs to be less than 30'),
  transportation: yup.string().uuid().required('Select a transportation'),
  customerName: yup.string().required('Enter a contact name'),
  customerEmail: yup.string().required('Enter a contact e-mail'),
})

export default function NewQuote() {
  const formik = useFormik({
    initialValues: {
      from: { label: '', id: '' },
      destination: { label: '', id: '' },
      departDate: new Date(),
      returnDate: new Date(),
      people: 1,
      transportation: '',
      customerName: '',
      customerEmail: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await quoteMutation.mutateAsync({
          departureId: values.from.id,
          departureDate: values.departDate,
          destinationId: values.destination.id,
          returnDate: values.returnDate,
          transportationId: values.transportation,
          customer: {
            name: values.customerName,
            email: values.customerEmail,
          },
          numPeople: values.people,
        })

        formik.resetForm()
        toast.success('Quote created with success')
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        toast.error(err.data?.message || err.message)
      }
    },
  })

  const queryClient = useQueryClient()
  const transportationsQuery = useQuery(
    ['transportations'],
    TransportationsService.listTransportations,
  )
  const quoteMutation = useMutation(async (newQuote: PostQuoteData) => {
    await QuotesService.createQuote(newQuote)
    return queryClient.invalidateQueries(['quotes'])
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={1} sx={{ backgroundColor: 'white' }}>
        <Grid item md={6}>
          <FormControl fullWidth>
            <AirportSearchField
              label='From'
              onSelectValue={(value) => formik.setFieldValue('from', value)}
              selectedValue={formik.values.from}
              aria-
            />
            {formik.touched.from && Boolean(formik.errors.from) && (
              <FormHelperText error>You must select a departure</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid item md={6}>
          <FormControl fullWidth>
            <AirportSearchField
              label='Destination'
              onSelectValue={(value) => formik.setFieldValue('destination', value)}
              selectedValue={formik.values.destination}
            />
            {formik.touched.destination && Boolean(formik.errors.destination) && (
              <FormHelperText error>You must select a destination</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid item md={6}>
          <FormControl fullWidth>
            <DatePicker
              disablePast
              label='Depart date'
              value={formik.values.departDate}
              onChange={(date) => formik.setFieldValue('departDate', date)}
              renderInput={(params) => <CustomTextField {...params} />}
            />
            {formik.touched.departDate && Boolean(formik.errors.departDate) && (
              <FormHelperText error>{String(formik.errors.departDate)}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid item md={6}>
          <FormControl fullWidth>
            <DatePicker
              disablePast
              label='Return date'
              value={formik.values.returnDate}
              onChange={(date) => formik.setFieldValue('returnDate', date)}
              renderInput={(params) => <CustomTextField {...params} />}
            />
            {formik.touched.returnDate && Boolean(formik.errors.returnDate) && (
              <FormHelperText error>{String(formik.errors.returnDate)}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid item md={6}>
          <FormControl fullWidth>
            <CustomTextField
              id='people'
              name='people'
              type='number'
              label='Travelers'
              value={formik.values.people}
              onChange={formik.handleChange}
            />
            {formik.touched.people && Boolean(formik.errors.people) && (
              <FormHelperText error>{String(formik.errors.people)}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid item md={6}>
          <FormControl fullWidth>
            <InputLabel id='transportation'>Transportation</InputLabel>
            <CustomSelect
              labelId='transportation'
              id='transportation'
              name='transportation'
              value={formik.values.transportation}
              label='Transportation'
              onChange={formik.handleChange}
            >
              {transportationsQuery.data?.results.map((transportation) => (
                <MenuItem
                  key={transportation.id}
                  value={transportation.id}
                >{`${transportation.name} (${transportation.price})`}</MenuItem>
              ))}
            </CustomSelect>
            {formik.touched.transportation && Boolean(formik.errors.transportation) && (
              <FormHelperText error>{String(formik.errors.transportation)}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid item md={6}>
          <FormControl fullWidth>
            <CustomTextField
              id='customerName'
              name='customerName'
              type='text'
              label='Name'
              value={formik.values.customerName}
              onChange={formik.handleChange}
            />
            {formik.touched.customerName && Boolean(formik.errors.customerName) && (
              <FormHelperText error>{String(formik.errors.customerName)}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid item md={6}>
          <FormControl fullWidth>
            <CustomTextField
              id='customerEmail'
              name='customerEmail'
              type='email'
              label='E-mail'
              value={formik.values.customerEmail}
              onChange={formik.handleChange}
            />
            {formik.touched.customerEmail && Boolean(formik.errors.customerEmail) && (
              <FormHelperText error>{String(formik.errors.customerEmail)}</FormHelperText>
            )}
          </FormControl>
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
            type='submit'
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? (
              <CircularProgress size={25} color='inherit' />
            ) : (
              'Create a quote'
            )}
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
