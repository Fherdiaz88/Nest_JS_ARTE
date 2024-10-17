import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AbstractArtModule } from './abstract-art/abstract-art.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AbstractArtModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
