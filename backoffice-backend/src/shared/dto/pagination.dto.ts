import { Type } from 'class-transformer';
import { IsInt, IsOptional, Max, Min } from 'class-validator';

export class PaginationDto {
  @IsInt()
  @Type(() => Number)
  @Min(1)
  @IsOptional()
  limit = 10;

  @IsInt()
  @Type(() => Number)
  @Min(1)
  @Max(50)
  @IsOptional()
  page = 1;

  get offset(): number {
    return this.limit * (this.page - 1);
  }
}
