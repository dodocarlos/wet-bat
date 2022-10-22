import { Injectable } from '@nestjs/common';
import { AirportRepository } from '@postgres-db/repositories/airport.repository';
import { GetAirportsOutputDto } from './dto/get-airports-output.dto';

@Injectable()
export class AirportsService {
  constructor(private readonly airportRepository: AirportRepository) {}

  async findAll(searchCondition: string): Promise<GetAirportsOutputDto> {
    const airports = await this.airportRepository.search(searchCondition);

    return { results: airports };
  }
}
