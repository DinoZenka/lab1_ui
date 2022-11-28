import { IsString, IsPositive, IsInt, Min, Max } from 'class-validator';

export class CreateCarDto {
  @IsString()
  public model: string;

  @IsString()
  public country: string;

  @IsPositive()
  public price: number;

  @IsInt()
  @Min(1950)
  @Max(2150)
  public year: number;
}
