import { Injectable } from '@nestjs/common';
import { TransportationRepository } from '@postgres-db/repositories/transportation.repository';
import { GetTransportationsOutputDto } from './dto/get-transportations-output.dto';

@Injectable()
export class TransportationsService {
  constructor(
    private readonly transportationRepository: TransportationRepository,
  ) {}

  async findAll(): Promise<GetTransportationsOutputDto> {
    const transportation = await this.transportationRepository.getAll();

    return { results: transportation };
  }
}
