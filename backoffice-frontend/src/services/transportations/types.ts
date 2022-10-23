interface GetTransportationsResponse {
  results: [
    {
      id: string
      name: string
      price: number
    },
  ]
}

export type { GetTransportationsResponse }
