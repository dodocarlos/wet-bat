import { PaginationOutputDto } from '@shared/dto';

export class QuoteDto {
  id: number;
  departureDate: Date;
  returnDate: Date;
  price: string;
  customer: {
    name: string;
    email: string;
  };
  departure: {
    name: string;
    iataCode: string;
    country: string;
    municipality: string;
  };
  destination: {
    name: string;
    iataCode: string;
    country: string;
    municipality: string;
  };
  transportation: {
    name: string;
  };
}

export class GetQuotesOutputDto extends PaginationOutputDto {
  results: QuoteDto[];
}
