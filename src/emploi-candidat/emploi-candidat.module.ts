import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmploiCandidatController } from './emploi-candidat.controller';
import { EmploiCandidatService } from './emploi-candidat.service';
import { CandidatEmploi } from './entities/emploi.entity';


@Module({
    imports:[TypeOrmModule.forFeature([CandidatEmploi])],
    providers:[EmploiCandidatService],
    controllers:[EmploiCandidatController]
})
export class EmploiCandidatModule {}
