import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { PublicationsService } from './publications.service';

@Controller('publications')
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) {}

  @Get()
  getAll() {
    return {
      success: true,
      data: this.publicationsService.findAll(),
    };
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return {
      success: true,
      data: this.publicationsService.findOne(Number(id)),
    };
  }

  @Post()
  create(@Body() body: any) {
    return {
      success: true,
      data: this.publicationsService.create(body),
    };
  }
}
