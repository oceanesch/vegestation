import { Module } from '@nestjs/common';
import { USER_DATABASE_SERVICE } from './constants';
import { DatabaseService } from './services';

@Module({
  providers: [
    DatabaseService,
    {
      provide: USER_DATABASE_SERVICE,
      useFactory: (databaseService: DatabaseService) => databaseService.user,
      inject: [DatabaseService],
    },
  ],
  exports: [USER_DATABASE_SERVICE],
})
export class DatabaseModule {}
