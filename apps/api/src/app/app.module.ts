import { Module } from '@nestjs/common';
import { DatabaseModule } from '@vegestation/api-database';
import { UserController } from './user.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
})
export class AppModule {}
