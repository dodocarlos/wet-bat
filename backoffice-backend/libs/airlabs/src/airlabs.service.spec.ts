import { Test, TestingModule } from '@nestjs/testing';
import { AirlabsService } from './airlabs.service';

describe('AirlabsService', () => {
  let service: AirlabsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AirlabsService],
    }).compile();

    service = module.get<AirlabsService>(AirlabsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
