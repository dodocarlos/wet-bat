interface GetAirportResponse {
  results: [
    {
      id: string
      name: string
      iataCode: string
      latitude: number
      longitude: number
      country: string
      region: string
      municipality: string
    },
  ]
}

export type { GetAirportResponse }
