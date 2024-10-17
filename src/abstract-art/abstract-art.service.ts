import { Injectable } from '@nestjs/common';
import { CreateAbstractArtDto } from './dto/create-abstract-art.dto';
import { UpdateAbstractArtDto } from './dto/update-abstract-art.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AbstractArtService {
  constructor(private prisma: PrismaService) {}
  create(createAbstractArtDto: CreateAbstractArtDto) {
    return 'This action adds a new abstractArt';
  }

  findAll() {
    return `This action returns all abstractArt`;
  }

  findOne(id: number) {
    return this.prisma.arte.findUnique({
      where: {id}
    });
  }

  update(id: number, updateAbstractArtDto: UpdateAbstractArtDto) {
    return this.prisma.arte.update({
      where: {id},
      data: updateAbstractArtDto,
    })
  }

  remove(id: number) {
    return this.prisma.arte.delete({
      where: {id}
    });
  }
}