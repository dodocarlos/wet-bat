import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateQuotesDto } from './dto/create-quotes.dto';
import { GetQuotesQueryDto } from './dto/get-quotes-query.dto';
import { QuotesService } from './quotes.service';

@Controller('quotes')
@ApiTags('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @ApiQuery({
    name: 'limit',
    type: Number,
  })
  @ApiQuery({
    name: 'page',
    type: Number,
  })
  @Get()
  findAll(@Query() query: GetQuotesQueryDto) {
    return this.quotesService.findAll(query);
  }

  @Post()
  create(@Body() body: CreateQuotesDto) {
    return this.quotesService.create(body);
  }
}
