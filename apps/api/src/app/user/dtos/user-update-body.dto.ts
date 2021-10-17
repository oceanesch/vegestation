import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UserUpdateBodyDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsEmail({})
  @IsOptional()
  email?: string;
}
