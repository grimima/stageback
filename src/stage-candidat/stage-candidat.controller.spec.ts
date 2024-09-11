import { Test, TestingModule } from '@nestjs/testing';
import { StageCandidatController } from './stage-candidat.controller';

describe('StageCandidatController', () => {
  let controller: StageCandidatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StageCandidatController],
    }).compile();

    controller = module.get<StageCandidatController>(StageCandidatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
