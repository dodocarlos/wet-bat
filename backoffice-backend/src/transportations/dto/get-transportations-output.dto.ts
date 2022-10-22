import { IsArray, IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

class TransportationModel {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsNumber()
  price: number;
}

export class GetTransportationsOutputDto {
  @IsArray()
  @Type(() => TransportationModel)
  results: TransportationModel[];
}
