import { Type } from 'class-transformer';
import {
  IsISO8601,
  IsNotEmpty,
  IsObject,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';

class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;
}

export class CreateQuotesDto {
  @IsUUID()
  @IsNotEmpty()
  departureId: string;

  @IsISO8601()
  @IsNotEmpty()
  departureDate: Date;

  @IsUUID()
  @IsNotEmpty()
  destinationId: string;

  @IsISO8601()
  @IsNotEmpty()
  returnDate: Date;

  @IsUUID()
  @IsNotEmpty()
  transportationId: string;

  @IsObject()
  @ValidateNested()
  @Type(() => CreateCustomerDto)
  customer: CreateCustomerDto;
}
