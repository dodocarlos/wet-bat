import { IsArray, IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

class AirportModel {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  iataCode: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;

  @IsString()
  country: string;

  @IsString()
  region: string;

  @IsString()
  municipality: string;
}

export class GetAirportsOutputDto {
  @IsArray()
  @Type(() => AirportModel)
  results: AirportModel[];
}
