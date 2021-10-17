import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import {
  UserCountQueryDto,
  UserCreateBodyDto,
  UserDeleteParamsDto,
  UserFindManyQueryDto,
  UserFindUniqueParamsDto,
  UserUpdateBodyDto,
  UserUpdateParamsDto,
  UserUpsertBodyDto,
  UserUpsertParamsDto,
} from '../dtos';

@Injectable()
export class UserRestDtoService {
  public formatCreateDto(bodyDto: UserCreateBodyDto): Prisma.UserCreateArgs {
    return {
      data: { ...bodyDto },
    };
  }

  public formatCountDto(queryDto: UserCountQueryDto): Prisma.UserCountArgs {
    return { where: { ...queryDto } };
  }

  public formatFindUniqueDtos(
    paramsDto: UserFindUniqueParamsDto,
  ): Prisma.UserFindUniqueArgs {
    return {
      where: { ...paramsDto },
    };
  }

  public formatFindManyDto(
    queryDto: UserFindManyQueryDto,
  ): Prisma.UserFindManyArgs {
    const { sort, order, take, skip, ...values } = queryDto;
    const where: Prisma.UserWhereInput = {
      ...values,
    };
    const orderBy = { [sort]: order };
    return {
      where,
      take,
      skip,
      orderBy,
    };
  }

  public formatUpdateDtos(
    paramsDto: UserUpdateParamsDto,
    bodyDto: UserUpdateBodyDto,
  ): Prisma.UserUpdateArgs {
    return { data: { ...bodyDto }, where: { ...paramsDto } };
  }

  public formatUpsertDtos(
    paramsDto: UserUpsertParamsDto,
    bodyDto: UserUpsertBodyDto,
  ): Prisma.UserUpsertArgs {
    return {
      create: { ...bodyDto },
      update: { ...bodyDto },
      where: { ...paramsDto },
    };
  }

  public formatDeleteDto(
    paramsDto: UserDeleteParamsDto,
  ): Prisma.UserDeleteArgs {
    return { where: { ...paramsDto } };
  }
}
