import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateQuotesDto } from './dto/create-quotes.dto';
import { GetQuotesQueryDto } from './dto/get-quotes-query.dto';
import { QuotesService } from './quotes.service';

@Controller('quotes')
@ApiTags('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  /** Return a quote by id */
  @Get(':id')
  findById(@Param('id') id: number) {
    return this.quotesService.findById(id);
  }

  /** Return a list of quotes */
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

  /** Create a new quote */
  @Post()
  create(@Body() body: CreateQuotesDto) {
    return this.quotesService.create(body);
  }
}
