import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateQuotesDto } from './dto/create-quotes.dto';
import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Get()
  findAll() {
    return this.quotesService.findAll();
  }

  @Post()
  create(@Body() body: CreateQuotesDto) {
    return this.quotesService.create(body);
  }
}
