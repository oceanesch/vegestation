import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
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
import { UserService, UserRestDtoService } from '../services';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly userRestDtoService: UserRestDtoService,
  ) {}

  @Post()
  create(@Body() bodyDto: UserCreateBodyDto) {
    const formattedParams = this.userRestDtoService.formatCreateDto(bodyDto);
    return this.userService.create(formattedParams);
  }

  @Get()
  findMany(@Query() queryDto: UserFindManyQueryDto) {
    const formattedParams = this.userRestDtoService.formatFindManyDto(queryDto);
    return this.userService.findMany(formattedParams);
  }

  @Get(':id')
  findUnique(@Param() paramsDto: UserFindUniqueParamsDto) {
    const formattedParams =
      this.userRestDtoService.formatFindUniqueDtos(paramsDto);
    return this.userService.findUnique(formattedParams);
  }

  @Get('count')
  count(@Query() queryDto: UserCountQueryDto) {
    const formattedParams = this.userRestDtoService.formatCountDto(queryDto);
    return this.userService.count(formattedParams);
  }
  // balbuiels
  @Patch(':id')
  update(
    @Param() paramsDto: UserUpdateParamsDto,
    @Body() bodyDto: UserUpdateBodyDto,
  ) {
    const formattedParams = this.userRestDtoService.formatUpdateDtos(
      paramsDto,
      bodyDto,
    );
    return this.userService.update(formattedParams);
  }

  @Put(':id')
  upsert(
    @Param() paramsDto: UserUpsertParamsDto,
    @Body() bodyDto: UserUpsertBodyDto,
  ) {
    const formattedParams = this.userRestDtoService.formatUpsertDtos(
      paramsDto,
      bodyDto,
    );
    return this.userService.upsert(formattedParams);
  }

  @Delete(':id')
  delete(@Param() paramsDto: UserDeleteParamsDto) {
    const formattedParams = this.userRestDtoService.formatDeleteDto(paramsDto);
    return this.userService.delete(formattedParams);
  }
}
