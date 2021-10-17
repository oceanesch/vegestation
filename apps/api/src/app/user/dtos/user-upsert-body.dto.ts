import { IsEmail, IsString } from 'class-validator';

export class UserUpsertBodyDto {
  @IsString()
  name!: string;

  @IsString()
  @IsEmail({})
  email!: string;
}
