import {
  IsEmail,
  IsOptional,
  IsString,
  IsIn,
  IsInt,
  Min,
} from 'class-validator';
import { SortOrder } from '../../types';
import { TransformStringToNumber } from '../../utils';

export class UserFindManyQueryDto {
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

  @IsOptional()
  @IsString()
  @IsIn(['id', 'label'])
  sort: 'id' | 'email' | 'name' = 'id';

  @IsOptional()
  @IsIn(Object.values(SortOrder))
  order: SortOrder = 'asc';

  @IsOptional()
  @IsInt()
  @Min(1)
  @TransformStringToNumber()
  take = 100;

  @IsOptional()
  @IsInt()
  @Min(0)
  @TransformStringToNumber()
  skip = 0;
}
