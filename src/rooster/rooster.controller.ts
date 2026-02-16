import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { RoosterService } from './rooster.service';

@Controller('rooster')
export class RoosterController {
  constructor(private readonly roosterService: RoosterService) {}

  @Get()
  getAll() {
    return this.roosterService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.roosterService.findOne(Number(id));
  }

  @Post()
  create(
    @Body()
    body: { title: string; name: string; startTime: string; endTime: string },
  ) {
    return this.roosterService.create(body);
  }
}
