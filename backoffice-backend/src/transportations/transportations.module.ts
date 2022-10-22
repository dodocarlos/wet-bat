import { Module } from '@nestjs/common';
import { TransportationsService } from './transportations.service';
import { TransportationsController } from './transportations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresDbModule } from '@postgres-db/postgres-db.module';
import { Transportation } from '@postgres-db/entities';
import { TransportationRepository } from '@postgres-db/repositories/transportation.repository';

@Module({
  imports: [PostgresDbModule, TypeOrmModule.forFeature([Transportation])],
  controllers: [TransportationsController],
  providers: [TransportationsService, TransportationRepository],
})
export class TransportationsModule {}
