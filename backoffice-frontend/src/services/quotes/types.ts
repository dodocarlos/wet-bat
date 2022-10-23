interface ListQuoteParams {
  limit: number
  page: number
}

interface ListQuoteResponse {
  results: [
    {
      id: number
      departureDate: Date
      returnDate: Date
      price: string
      customer: {
        name: string
        email: string
      }
      departure: {
        name: string
        iataCode: string
        country: string
        municipality: string
      }
      destination: {
        name: string
        iataCode: string
        country: string
        municipality: string
      }
      transportation: {
        name: string
      }
    },
  ]
  offset: number
  limit: number
  total: number
  count: number
}

interface PostQuoteData {
  departureId: string
  departureDate: Date
  destinationId: string
  returnDate: Date
  transportationId: string
  customer: {
    name: string
    email: string
  }
  numPeople: number
}

interface PostQuoteResponse {
  id: number
  customer: {
    id: string
    name: string
    email: string
    createdAt: Date
    updatedAt: Date
  }
  departure: {
    id: string
    name: string
    iataCode: string
    latitude: number
    longitude: number
    country: string
    region: string
    municipality: string
    createdAt: Date
    updatedAt: Date
  }
  departureDate: Date
  destination: {
    id: string
    name: string
    iataCode: string
    latitude: number
    longitude: number
    country: string
    region: string
    municipality: string
    createdAt: Date
    updatedAt: Date
  }
  returnDate: Date
  transportation: {
    id: string
    name: string
    price: number
    createdAt: Date
    updatedAt: Date
  }
  numPeople: number
  price: string
  createdAt: Date
  updatedAt: Date
}

interface GetQuoteResponse {
  id: number
  customer: {
    id: string
    name: string
    email: string
    createdAt: Date
    updatedAt: Date
  }
  departure: {
    id: string
    name: string
    iataCode: string
    latitude: number
    longitude: number
    country: string
    region: string
    municipality: string
    createdAt: Date
    updatedAt: Date
  }
  departureDate: Date
  destination: {
    id: string
    name: string
    iataCode: string
    latitude: number
    longitude: number
    country: string
    region: string
    municipality: string
    createdAt: Date
    updatedAt: Date
  }
  returnDate: Date
  transportation: {
    id: string
    name: string
    price: number
    createdAt: Date
    updatedAt: Date
  }
  numPeople: number
  price: string
  createdAt: Date
  updatedAt: Date
}

export type {
  ListQuoteParams,
  ListQuoteResponse,
  PostQuoteData,
  PostQuoteResponse,
  GetQuoteResponse,
}
