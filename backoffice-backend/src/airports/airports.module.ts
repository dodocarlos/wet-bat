import { Module } from '@nestjs/common';
import { AirportsService } from './airports.service';
import { AirportsController } from './airports.controller';
import { PostgresDbModule } from '@postgres-db/postgres-db.module';
import { AirportRepository } from '@postgres-db/repositories';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Airport } from '@postgres-db/entities';

@Module({
  imports: [PostgresDbModule, TypeOrmModule.forFeature([Airport])],
  controllers: [AirportsController],
  providers: [AirportsService, AirportRepository],
})
export class AirportsModule {}
