import { Injectable } from '@nestjs/common';
import { QuoteRepository } from '@postgres-db/repositories/quote.repository';
import { CreateQuotesDto } from './dto/create-quotes.dto';
import { GetQuotesOutputDto } from './dto/get-quotes.output.dto';

@Injectable()
export class QuotesService {
  constructor(private readonly quoteRepository: QuoteRepository) {}

  async findAll(): Promise<GetQuotesOutputDto> {
    const quotes = await this.quoteRepository.listQuotes();

    const results = quotes.map((quote) => ({
      id: quote.id,
      departureDate: quote.departureDate,
      returnDate: quote.returnDate,
      price: quote.price,
      customer: {
        name: quote.customer.name,
        email: quote.customer.email,
      },
      departure: {
        name: quote.departure.name,
        iataCode: quote.departure.iataCode,
        country: quote.departure.country,
        municipality: quote.departure.municipality,
      },
      destination: {
        name: quote.destination.name,
        iataCode: quote.destination.iataCode,
        country: quote.destination.country,
        municipality: quote.destination.municipality,
      },
      transportation: {
        name: quote.transportation.name,
      },
    }));

    return { results };
  }

  create(data: CreateQuotesDto) {
    const price = 1000;

    return this.quoteRepository.createQuote({
      name: data.customer.name,
      email: data.customer.email,
      price: `$${price}`,
      ...data,
    });
  }
}
