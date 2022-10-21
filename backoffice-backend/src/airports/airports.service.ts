import { Injectable } from '@nestjs/common';
import { AirportRepository } from 'src/postgres-db/repository/airport.repository';
import { AirportsOutputDto } from './dto/airports-output.dto';

@Injectable()
export class AirportsService {
  constructor(private readonly airportRepository: AirportRepository) {}

  async findAll(search: string): Promise<AirportsOutputDto> {
    const airports = await this.airportRepository.searchAirports(search);

    return { results: airports };
  }
}
