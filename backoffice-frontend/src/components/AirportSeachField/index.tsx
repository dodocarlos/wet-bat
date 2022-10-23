import React, { useState } from 'react'

import { Autocomplete } from '@mui/material'
import { useQuery } from '@tanstack/react-query'

import { useDebounce } from '../../hooks/useDebounce'

import * as AirportsService from '../../services/airports'
import CustomTextField from '../CustomTextField'

interface AirportOption {
  label: string
  id: string
}

type Props = {
  onSelectValue: (value: AirportOption | null) => void
  label?: string
  filterMinLength?: number
  selectedValue: AirportOption | null
}

export default function AirportSearchField({
  onSelectValue,
  selectedValue,
  filterMinLength = 3,
  label = 'Airport',
}: Props) {
  const [queryUpdatedAt, setQueryUpdatedAt] = useState<number>(0)
  const [filter, setFilter] = useState<string>('USA')
  const [options, setOptions] = useState<AirportOption[]>([])

  const debouncedFilter = useDebounce<string>(filter, 500)

  const queryEnabled = debouncedFilter.length >= filterMinLength
  const query = useQuery(
    ['airports', debouncedFilter],
    ({ queryKey }) => AirportsService.searchAirports(queryKey[1]),
    { enabled: queryEnabled },
  )

  if (query.dataUpdatedAt > queryUpdatedAt) {
    const data = query.data?.results.map<AirportOption>((airport) => ({
      label: `${airport.municipality}, ${airport.country} (${airport.iataCode})`,
      id: airport.id,
    }))

    if (data) {
      setOptions(data)
    }
    setQueryUpdatedAt(query.dataUpdatedAt)
  }

  return (
    <Autocomplete
      disablePortal
      fullWidth
      options={options}
      loading={queryEnabled && query.isLoading}
      onChange={(_, value) => onSelectValue(value)}
      onInputChange={(e, value) => {
        if (e.type === 'change') {
          setFilter(value)
        }
      }}
      value={selectedValue}
      renderInput={(params) => <CustomTextField {...params} label={label} />}
    />
  )
}
