import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Res,
  Delete,
} from '@nestjs/common';
import { Response } from 'express';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  default() {
    return {
      controll: 'Courses',
    };
  }

  @Get('findAll')
  findAll() {
    return this.coursesService.findAll();
  }
  @Get('getAll')
  getAll() {
    return this.coursesService.getAll();
  }
  @Get('getOne/:id')
  getOne(@Param() param) {
    const id = param.id;
    return this.coursesService.getOne(id);
  }
  @Post('post')
  post(@Body() body) {
    return this.coursesService.post(body);
  }

  @Put('put/:id')
  put(@Param() param) {
    return this.coursesService.put(param.id);
  }

  @Delete('delete/:id')
  delete(@Param() param) {
    return this.coursesService.delete(param.id);
  }
}
