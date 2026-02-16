import { Test, TestingModule } from '@nestjs/testing';
import { RoosterService } from './rooster.service';

describe('RoosterService', () => {
  let service: RoosterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoosterService],
    }).compile();

    service = module.get<RoosterService>(RoosterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
