import React, { useEffect, useState } from 'react'

import { Visibility } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { DataGrid, GridColDef, GridRowId } from '@mui/x-data-grid'

import { useQuery } from '@tanstack/react-query'

import * as QuotesService from '../../services/quotes'
import { formatDate } from '../../utils/date'

interface QuoteRow {
  id: number
  customerName: string
  departure: string
  departureDate: string
  transportation: string
  price: string
}

interface QuouteData {
  rows: QuoteRow[]
  rowCount: number
}

interface Props {
  onActionClick?: (id: GridRowId) => void
}

export default function QuotesDataGrid({ onActionClick }: Props) {
  const [columns, setColumns] = useState<GridColDef[]>([
    {
      field: 'id',
      headerName: 'Id. #',
    },
    {
      field: 'customerName',
      headerName: 'Name',
      width: 200,
    },
    {
      field: 'destination',
      headerName: 'Destination',
      width: 300,
    },
    {
      field: 'departureDate',
      headerName: 'Departure date',
      width: 150,
    },
    {
      field: 'price',
      headerName: 'Price',
    },
  ])

  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [rows, setRows] = useState<QuouteData>({ rows: [], rowCount: 0 })
  const [dataUpdatedAt, setDataUpdatedAt] = useState(0)

  const quotesQuery = useQuery(
    ['quotes', pageSize, page + 1],
    ({ queryKey }) =>
      QuotesService.listQuotes({ limit: Number(queryKey[1]), page: Number(queryKey[2]) }),
    {
      select: (data): QuouteData => ({
        rows: data.results.map((quote) => ({
          id: quote.id,
          customerName: quote.customer.name,
          departure: `${quote.departure.municipality}, ${quote.departure.country} (${quote.departure.iataCode})`,
          departureDate: formatDate(new Date(quote.departureDate)),
          destination: `${quote.destination.municipality}, ${quote.destination.country} (${quote.destination.iataCode})`,
          transportation: quote.transportation.name,
          price: quote.price,
        })),
        rowCount: data.total,
      }),
    },
  )

  if (quotesQuery.dataUpdatedAt > dataUpdatedAt) {
    if (quotesQuery.data) {
      setRows(quotesQuery.data)
    }
    setDataUpdatedAt(quotesQuery.dataUpdatedAt)
  }

  useEffect(() => {
    if (onActionClick) {
      setColumns([
        ...columns,
        {
          field: 'action',
          headerName: 'Action',
          sortable: false,
          renderCell: (params) => {
            return (
              <IconButton
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onClick={(e: any) => {
                  e.stopPropagation()

                  return onActionClick(params.id)
                }}
              >
                <Visibility color='secondary' />
              </IconButton>
            )
          },
        },
      ])
    }
  }, [])

  return (
    <DataGrid
      page={page}
      onPageChange={(page) => setPage(page)}
      pageSize={pageSize}
      onPageSizeChange={(pageSize) => setPageSize(pageSize)}
      rowsPerPageOptions={[10, 30, 50]}
      columns={columns}
      rows={rows.rows}
      rowCount={rows.rowCount}
      loading={quotesQuery.isLoading || quotesQuery.isFetching}
      paginationMode='server'
    />
  )
}
