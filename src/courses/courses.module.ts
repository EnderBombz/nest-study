import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CourseSchema } from './../schemas/courses.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesService } from './courses.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Course', schema: CourseSchema }]),
  ],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
