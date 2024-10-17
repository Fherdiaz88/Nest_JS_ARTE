import { Test, TestingModule } from '@nestjs/testing';
import { AbstractArtService } from './abstract-art.service';

describe('AbstractArtService', () => {
  let service: AbstractArtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbstractArtService],
    }).compile();

    service = module.get<AbstractArtService>(AbstractArtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
