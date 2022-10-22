import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TransportationsService } from './transportations.service';

@Controller('transportations')
@ApiTags('transportations')
export class TransportationsController {
  constructor(private readonly transportationService: TransportationsService) {}

  /** List all transportations */
  @Get()
  findAll() {
    return this.transportationService.findAll();
  }
}
