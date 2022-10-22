import { IsString } from 'class-validator';

export class GetAiportsQueryDto {
  @IsString()
  search: string;
}
