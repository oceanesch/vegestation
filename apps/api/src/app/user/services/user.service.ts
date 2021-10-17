import { Prisma } from '.prisma/client';
import { Inject, Injectable } from '@nestjs/common';
import {
  UserDatabaseService,
  USER_DATABASE_SERVICE,
} from '@vegestation/api-database';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_DATABASE_SERVICE)
    private readonly userDatabaseService: UserDatabaseService,
  ) {}

  create(args: Prisma.UserCreateArgs) {
    return this.userDatabaseService.create(args);
  }

  findUnique(args: Prisma.UserFindUniqueArgs) {
    return this.userDatabaseService.findUnique(args);
  }

  findMany(args: Prisma.UserFindManyArgs) {
    return this.userDatabaseService.findMany(args);
  }

  count(args: Prisma.UserCountArgs) {
    return this.userDatabaseService.count(args);
  }

  update(args: Prisma.UserUpdateArgs) {
    return this.userDatabaseService.update(args);
  }

  upsert(args: Prisma.UserUpsertArgs) {
    return this.userDatabaseService.upsert(args);
  }

  delete(args: Prisma.UserDeleteArgs) {
    return this.userDatabaseService.delete(args);
  }
}
