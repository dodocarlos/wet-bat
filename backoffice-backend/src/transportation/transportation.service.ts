import { Injectable } from '@nestjs/common';
import { TransportationRepository } from '@postgres-db/repository/transportation.repository';

@Injectable()
export class TransportationService {
  constructor(
    private readonly transportationRepository: TransportationRepository,
  ) {}

  findAll() {
    return this.transportationRepository.getAll();
  }
}
