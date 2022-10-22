import { Module } from '@nestjs/common';
import { TransportationService } from './transportation.service';
import { TransportationController } from './transportation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresDbModule } from '@postgres-db/postgres-db.module';
import { Transportation } from '@postgres-db/entity';
import { TransportationRepository } from '@postgres-db/repository/transportation.repository';

@Module({
  imports: [PostgresDbModule, TypeOrmModule.forFeature([Transportation])],
  controllers: [TransportationController],
  providers: [TransportationService, TransportationRepository],
})
export class TransportationModule {}
