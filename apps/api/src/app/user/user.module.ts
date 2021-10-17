import { Module } from '@nestjs/common';
import { DatabaseModule } from '@vegestation/api-database';
import { UserController } from './controllers';
import { UserService, UserRestDtoService } from './services';

@Module({
  controllers: [UserController],
  imports: [DatabaseModule],
  providers: [UserService, UserRestDtoService],
  exports: [UserService, UserRestDtoService],
})
export class UserModule {}
