import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TransportationService } from './transportation.service';

@Controller('transportation')
@ApiTags('transportation')
export class TransportationController {
  constructor(private readonly transportationService: TransportationService) {}

  @Get()
  findAll() {
    return this.transportationService.findAll();
  }
}
