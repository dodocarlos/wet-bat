import { Injectable } from '@nestjs/common';
import { AirportRepository } from '@postgres-db/repositories/airport.repository';
import { GetAirportsOutputDto } from './dto/get-airports-output.dto';
import { GetAiportsQueryDto } from './dto/get-airports-query.dto';

@Injectable()
export class AirportsService {
  constructor(private readonly airportRepository: AirportRepository) {}

  async findAll(
    getAiportsQueryDto: GetAiportsQueryDto,
  ): Promise<GetAirportsOutputDto> {
    const airports = await this.airportRepository.search(
      getAiportsQueryDto.search,
    );

    return { results: airports };
  }
}
