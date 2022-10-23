import api from '../api'
import {
  GetQuoteResponse,
  ListQuoteParams,
  ListQuoteResponse,
  PostQuoteData,
  PostQuoteResponse,
} from './types'

const listQuotes = async (params: ListQuoteParams): Promise<ListQuoteResponse> => {
  const response = await api.get(`/v1/quotes?limit=${params.limit}&page=${params.page}`)
  return response.data
}

const getQuoteById = async (id: number): Promise<GetQuoteResponse> => {
  const response = await api.get(`/v1/quotes/${id}`)
  return response.data
}

const createQuote = async (data: PostQuoteData): Promise<PostQuoteResponse> => {
  const response = await api.post('/v1/quotes', data)
  return response.data
}

export { listQuotes, createQuote, getQuoteById }
