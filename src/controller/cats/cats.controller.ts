import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  create() {
    return 'this action adds a new cat';
  }

  @Get()
  findAll() {
    return 'this action returns all cats';
  }
}
