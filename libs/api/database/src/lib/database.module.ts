import { Module } from '@nestjs/common';
import { USER_BOOK_SERVICE, USER_DATABASE_SERVICE } from './constants';
import { DatabaseService } from './services';

@Module({
  providers: [
    DatabaseService,
    {
      provide: USER_DATABASE_SERVICE,
      useFactory: (databaseService: DatabaseService) => databaseService.user,
      inject: [DatabaseService],
    },
    {
      provide: USER_BOOK_SERVICE,
      useFactory: (databaseService: DatabaseService) => databaseService.book,
      inject: [DatabaseService],
    },
  ],
  exports: [USER_DATABASE_SERVICE, USER_BOOK_SERVICE],
})
export class DatabaseModule {}
