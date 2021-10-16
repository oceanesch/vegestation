import { IsEmail, IsString } from 'class-validator';

export class UserCreateBodyDto {
  @IsString()
  name!: string;

  @IsString()
  @IsEmail({})
  email!: string;
}
