import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerModel } from '@postgres-db/models/customer.model';
import { QuoteModel } from '@postgres-db/models/quote.model';
import { EntityManager, Repository } from 'typeorm';
import { Quote } from '../entities';
import { AirportRepository } from './airport.repository';
import { CustomerRepository } from './customer.repository';
import { TransportationRepository } from './transportation.repository';

@Injectable()
export class QuoteRepository {
  constructor(
    @InjectRepository(Quote) private readonly quoteRep: Repository<Quote>,
    private readonly customerRepository: CustomerRepository,
    private readonly airportRepository: AirportRepository,
    private readonly transportationRepository: TransportationRepository,
  ) {}

  async createQuote(quoteData: QuoteModel & CustomerModel): Promise<Quote> {
    const {
      name,
      email,
      departureId,
      departureDate,
      destinationId,
      returnDate,
      transportationId,
      numPeople,
      price,
    } = quoteData;

    const departure = await this.airportRepository.getById(departureId);
    if (!departure) {
      throw new UnprocessableEntityException('Departure airport was not found');
    }

    const destination = await this.airportRepository.getById(destinationId);
    if (!destination) {
      throw new UnprocessableEntityException(
        'Destination airport was not found',
      );
    }

    const transportation = await this.transportationRepository.getById(
      transportationId,
    );
    if (!transportation) {
      throw new UnprocessableEntityException(
        'Transportation method was not found',
      );
    }

    let customer = await this.customerRepository.getCustomerByEmail(email);

    return this.quoteRep.manager.transaction(
      async (entityManager: EntityManager) => {
        if (!customer) {
          customer = await this.customerRepository.createCustomer(
            {
              name,
              email,
            },
            entityManager,
          );
        }

        const quote = this.quoteRep.create({
          customer,
          departure,
          departureDate,
          destination,
          returnDate,
          transportation,
          numPeople,
          price,
        });

        return entityManager.save(quote);
      },
    );
  }

  async listQuotes(limit: number, offset: number): Promise<[Quote[], number]> {
    return this.quoteRep.findAndCount({
      take: limit,
      skip: offset,
    });
  }

  getQuoteById = (id: number) => this.quoteRep.findOneBy({ id });
}
