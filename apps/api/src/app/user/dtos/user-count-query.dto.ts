import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UserCountQueryDto {
  @IsString()
  @IsOptional()
  id?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsEmail({})
  @IsOptional()
  email?: string;
}
