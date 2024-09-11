import { Test, TestingModule } from '@nestjs/testing';
import { StageCandidatService } from './stage-candidat.service';

describe('StageCandidatService', () => {
  let service: StageCandidatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StageCandidatService],
    }).compile();

    service = module.get<StageCandidatService>(StageCandidatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
