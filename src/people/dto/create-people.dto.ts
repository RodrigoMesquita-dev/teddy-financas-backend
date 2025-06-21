import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePeopleDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  payment: number;

  @IsNumber()
  @IsNotEmpty()
  company: number;
}
