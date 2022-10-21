import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AirportsService } from './airports.service';
import { AirportsOutputDto } from './dto/airports-output.dto';
import { AiportsQueryDto } from './dto/airports-query.dto';

@Controller('airports')
@ApiTags('airports')
export class AirportsController {
  constructor(private readonly airportsService: AirportsService) {}

  @ApiQuery({
    name: 'search',
    type: String,
  })
  @ApiResponse({
    status: 200,
    type: AirportsOutputDto,
  })
  @Get()
  findAll(@Query() query: AiportsQueryDto) {
    return this.airportsService.findAll(query.search);
  }
}
