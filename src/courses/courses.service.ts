import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Course, CourseDocument } from './../schemas/courses.schema';
import { CreateCourseDto } from '../dto/create-course.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(Course.name) private courseModel: Model<CourseDocument>,
  ) {}

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const createdCat = new this.courseModel(createCourseDto);
    return createdCat.save();
  }

  async findAll(): Promise<Course[]> {
    return this.courseModel.find().exec();
  }

  getAll() {
    return { Model: Course.name, method: 'getAll' };
  }
  getOne(id) {
    return { Model: Course.name, method: 'getOne', id: id };
  }
  post(body) {
    const item = new this.courseModel({
      name: body.name,
      products: [body.products],
    });
    item.save();
    return { Model: Course.name, method: 'post', body: { body } };
  }
  put(id) {
    return { Model: Course.name, method: 'put', id: { id } };
  }
  delete(id) {
    return { Model: Course.name, method: 'delete', id: { id } };
  }
}
