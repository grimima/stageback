import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CandidatStage } from './entities/stage.entity';
import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDTO } from './dto/update-stage.dto';

@Injectable()
export class StageCandidatService {
    constructor(@InjectRepository(CandidatStage) private  userRepository: Repository<CandidatStage>){}
    create(createUserDto: CreateStageDto):Promise<CandidatStage>{
        const CandidatStg : CandidatStage = new CandidatStage;
        CandidatStg.nom= createUserDto.nom;
        CandidatStg.prenom=createUserDto.prenom;
        CandidatStg.email=createUserDto.email;
        CandidatStg.phoneNumber=createUserDto.phoneNumber;
        CandidatStg.typeStage=createUserDto.typeStage;
        CandidatStg.anneeDetude=createUserDto.anneeDetude;
        CandidatStg.selectedChoice=createUserDto.selectedChoice;
        return this.userRepository.save(CandidatStg);

    }
    findAll():Promise<CandidatStage[]>{
        return this.userRepository.find();
    }
    findOne(stgCandidat_id:number):Promise<CandidatStage|null>{
        return this.userRepository.findOneBy({stgCandidat_id});
    }
    update(stgCandidat_id: number, updateUserDto:UpdateStageDTO):Promise<CandidatStage>{
        const CandidatStg : CandidatStage = new CandidatStage;
        CandidatStg.stgCandidat_id=stgCandidat_id;
        CandidatStg.nom= updateUserDto.nom;
        CandidatStg.prenom=updateUserDto.prenom;
        CandidatStg.email=updateUserDto.email;
        CandidatStg.phoneNumber=updateUserDto.phoneNumber;
        CandidatStg.typeStage=updateUserDto.typeStage;
        CandidatStg.anneeDetude=updateUserDto.anneeDetude;
        CandidatStg.selectedChoice=updateUserDto.selectedChoice;
        return this.userRepository.save(CandidatStg);
    }
    async remove(stgCandidat_id:number):Promise<void>{
        await this.userRepository.delete(stgCandidat_id);
    }
}
