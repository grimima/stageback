import { Test, TestingModule } from '@nestjs/testing';
import { EmploiCandidatService } from './emploi-candidat.service';

describe('EmploiCandidatService', () => {
  let service: EmploiCandidatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmploiCandidatService],
    }).compile();

    service = module.get<EmploiCandidatService>(EmploiCandidatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
