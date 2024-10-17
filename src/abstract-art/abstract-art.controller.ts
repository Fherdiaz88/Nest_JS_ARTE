import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AbstractArtService } from './abstract-art.service';
import { CreateAbstractArtDto } from './dto/create-abstract-art.dto';
import { UpdateAbstractArtDto } from './dto/update-abstract-art.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('abstract-art')
@ApiTags('abstract-art')
export class AbstractArtController {
  constructor(private readonly abstractArtService: AbstractArtService) {}

  @Post()
  create(@Body() createAbstractArtDto: CreateAbstractArtDto) {
    return this.abstractArtService.create(createAbstractArtDto);
  }

  @Get()
  findAll() {
    return this.abstractArtService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.abstractArtService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAbstractArtDto: UpdateAbstractArtDto) {
    return this.abstractArtService.update(+id, updateAbstractArtDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.abstractArtService.remove(+id);
  }
}
