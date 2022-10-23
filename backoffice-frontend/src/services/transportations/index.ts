import api from '../api'
import { GetTransportationsResponse } from './types'

const listTransportations = async (): Promise<GetTransportationsResponse> => {
  const response = await api.get('/v1/transportations')
  return response.data
}

export { listTransportations }
