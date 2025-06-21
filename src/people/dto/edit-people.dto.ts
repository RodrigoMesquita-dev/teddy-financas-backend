import { IsNumber, IsOptional, IsString } from 'class-validator';

export class EditPeopleDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  payment?: number;

  @IsNumber()
  @IsOptional()
  company?: number;
}
