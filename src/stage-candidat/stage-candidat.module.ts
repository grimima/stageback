import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StageCandidatService } from './stage-candidat.service';
import { StageCandidatController } from './stage-candidat.controller';
import { CandidatStage } from './entities/stage.entity';

@Module({
    imports:[TypeOrmModule.forFeature([CandidatStage])],
    exports: [TypeOrmModule,StageCandidatService],
    providers:[StageCandidatService],
    controllers:[StageCandidatController]
})
export class StageCandidatModule {}
