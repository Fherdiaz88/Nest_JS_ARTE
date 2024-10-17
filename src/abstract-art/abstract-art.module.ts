import { Module } from '@nestjs/common';
import { AbstractArtService } from './abstract-art.service';
import { AbstractArtController } from './abstract-art.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AbstractArtController],
  providers: [AbstractArtService],
  imports: [PrismaModule],
})
export class AbstractArtModule {}
