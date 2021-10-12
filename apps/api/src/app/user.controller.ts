import { Controller, Get, Inject } from '@nestjs/common';
import {
  USER_DATABASE_SERVICE,
  UserDatabaseService,
} from '@vegestation/api-database';

@Controller('user')
export class UserController {
  constructor(
    @Inject(USER_DATABASE_SERVICE)
    private readonly userDatabaseService: UserDatabaseService,
  ) {}

  @Get()
  getData() {
    return this.userDatabaseService.findMany();
  }
}
