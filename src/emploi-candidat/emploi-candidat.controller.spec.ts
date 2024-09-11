import { Test, TestingModule } from '@nestjs/testing';
import { EmploiCandidatController } from './emploi-candidat.controller';

describe('EmploiCandidatController', () => {
  let controller: EmploiCandidatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmploiCandidatController],
    }).compile();

    controller = module.get<EmploiCandidatController>(EmploiCandidatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
