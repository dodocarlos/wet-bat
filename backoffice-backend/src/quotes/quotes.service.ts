import { Injectable } from '@nestjs/common';
import { Quote } from '@postgres-db/entities';
import { QuoteRepository } from '@postgres-db/repositories/quote.repository';
import { CreateQuotesDto } from './dto/create-quotes.dto';
import { GetQuotesQueryDto } from './dto/get-quotes-query.dto';
import { GetQuotesOutputDto } from './dto/get-quotes.output.dto';

@Injectable()
export class QuotesService {
  constructor(private readonly quoteRepository: QuoteRepository) {}

  async findAll(getQuoutesDto: GetQuotesQueryDto): Promise<GetQuotesOutputDto> {
    const { limit, offset } = getQuoutesDto;
    const [quotes, total] = await this.quoteRepository.listQuotes(
      limit,
      offset,
    );

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

    return {
      results,
      count: results.length,
      limit,
      offset,
      total,
    };
  }

  create(data: CreateQuotesDto): Promise<Quote> {
    const {
      departureId,
      departureDate,
      destinationId,
      numPeople,
      returnDate,
      transportationId,
    } = data;

    // TODO: Define price business login
    const price = 1000;

    return this.quoteRepository.createQuote({
      name: data.customer.name,
      email: data.customer.email,
      price: `$${price}`,
      departureId,
      departureDate,
      destinationId,
      numPeople,
      returnDate,
      transportationId,
    });
  }
}
