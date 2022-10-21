import { IsString } from 'class-validator';

export class AiportsQueryDto {
  @IsString()
  search: string;
}
