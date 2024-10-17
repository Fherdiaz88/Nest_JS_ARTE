import { Test, TestingModule } from '@nestjs/testing';
import { AbstractArtController } from './abstract-art.controller';
import { AbstractArtService } from './abstract-art.service';

describe('AbstractArtController', () => {
  let controller: AbstractArtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AbstractArtController],
      providers: [AbstractArtService],
    }).compile();

    controller = module.get<AbstractArtController>(AbstractArtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
