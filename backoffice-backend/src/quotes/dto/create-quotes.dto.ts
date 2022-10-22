import { Type } from 'class-transformer';
import {
  IsInt,
  IsISO8601,
  IsNotEmpty,
  IsObject,
  IsString,
  IsUUID,
  Max,
  Min,
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

  @IsInt()
  @Min(1)
  @Max(30)
  numPeople: number;
}
