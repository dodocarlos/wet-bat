import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { QuotesController } from './quotes.controller';
import { PostgresDbModule } from '@postgres-db/postgres-db.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Airport,
  Customer,
  Transportation,
  Quote,
} from '@postgres-db/entities';
import { QuoteRepository } from '@postgres-db/repositories/quote.repository';
import { CustomerRepository } from '@postgres-db/repositories/customer.repository';
import { AirportRepository } from '@postgres-db/repositories';
import { TransportationRepository } from '@postgres-db/repositories/transportation.repository';

@Module({
  imports: [
    PostgresDbModule,
    TypeOrmModule.forFeature([Airport, Customer, Transportation, Quote]),
  ],
  controllers: [QuotesController],
  providers: [
    QuotesService,
    CustomerRepository,
    AirportRepository,
    TransportationRepository,
    QuoteRepository,
  ],
})
export class QuotesModule {}
