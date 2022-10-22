import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AirportsService } from './airports.service';
import { GetAirportsOutputDto } from './dto/get-airports-output.dto';
import { GetAiportsQueryDto } from './dto/get-airports-query.dto';

@Controller('airports')
@ApiTags('airports')
export class AirportsController {
  constructor(private readonly airportsService: AirportsService) {}

  /** Search for airports (IATA code ou municipality ) */
  @ApiQuery({
    name: 'search',
    type: String,
  })
  @ApiResponse({
    status: 200,
    type: GetAirportsOutputDto,
  })
  @Get()
  findAll(@Query() query: GetAiportsQueryDto) {
    return this.airportsService.findAll(query);
  }
}
