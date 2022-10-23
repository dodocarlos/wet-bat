import api from '../api'
import { GetAirportResponse } from './types'

const searchAirports = async (condition: string): Promise<GetAirportResponse> => {
  const response = await api.get(`/v1/airports?search=${condition}`)
  return response.data
}

export { searchAirports }
