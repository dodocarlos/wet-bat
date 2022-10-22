import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AirportsModule } from './airports/airports.module';
import { PostgresDbModule } from './postgres-db/postgres-db.module';
import { TransportationsModule } from './transportations/transportations.module';
import { QuotesModule } from './quotes/quotes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.env.NODE_ENV}.env`,
    }),
    AirportsModule,
    PostgresDbModule,
    TransportationsModule,
    QuotesModule,
  ],
})
export class AppModule {}
