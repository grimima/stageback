import { Module } from '@nestjs/common';
import { StageCandidatController } from './stage-candidat.controller';
import { StageCandidatService } from './stage-candidat.service';
import { StageCandidatModule } from './stage-candidat.module';

@Module({
    imports:[StageCandidatModule],
    providers:[StageCandidatService],
    controllers:[StageCandidatController]
})
export class StageHttpmodule{}