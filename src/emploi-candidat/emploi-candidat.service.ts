import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CandidatEmploi } from './entities/emploi.entity';
import { CreateEmploiDto } from './dto/create-emploi.dto';
import { UpdateEmploiDTO } from './dto/update-emploi.dto';

@Injectable()
export class EmploiCandidatService {
    constructor(@InjectRepository(CandidatEmploi)private emploiRepository :Repository<CandidatEmploi>){}
    create(createUserDto: CreateEmploiDto):Promise<CandidatEmploi>{
        const CandidatEmpl : CandidatEmploi = new CandidatEmploi;
        CandidatEmpl.nom=createUserDto.nom;
        CandidatEmpl.prenom=createUserDto.prenom;
        CandidatEmpl.email=createUserDto.email;
        CandidatEmpl.phoneNumber=createUserDto.phoneNumber;
        CandidatEmpl.connaissance=createUserDto.connaissance;
        CandidatEmpl.source=createUserDto.source;
        CandidatEmpl.posteNow=createUserDto.posteNow;
        CandidatEmpl.fourchette=createUserDto.fourchette;
        CandidatEmpl.pretention=createUserDto.pretention;
        CandidatEmpl.region=createUserDto.region;
        CandidatEmpl.selectedChoice=createUserDto.selectedChoice;
        return this.emploiRepository.save(CandidatEmpl);
    }
    findAll(): Promise<CandidatEmploi[]>{
        return this.emploiRepository.find();
    }
    findOne(emplCandidat_id:number):Promise<CandidatEmploi|null>{
        return this.emploiRepository.findOneBy({emplCandidat_id});
    }
    updatee(emplCandidat_id:number,updateUserDto: UpdateEmploiDTO):Promise<CandidatEmploi>{
        const CandidatEmpl : CandidatEmploi = new CandidatEmploi;
        CandidatEmpl.emplCandidat_id=emplCandidat_id;
        CandidatEmpl.nom=updateUserDto.nom;
        CandidatEmpl.prenom=updateUserDto.prenom;
        CandidatEmpl.email=updateUserDto.email;
        CandidatEmpl.phoneNumber=updateUserDto.phoneNumber;
        CandidatEmpl.connaissance=updateUserDto.connaissance;
        CandidatEmpl.source=updateUserDto.source;
        CandidatEmpl.posteNow=updateUserDto.posteNow;
        CandidatEmpl.fourchette=updateUserDto.fourchette;
        CandidatEmpl.pretention=updateUserDto.pretention;
        CandidatEmpl.region=updateUserDto.region;
        CandidatEmpl.selectedChoice=updateUserDto.selectedChoice;
        return this.emploiRepository.save(CandidatEmpl);
    }
    async remove(emplCandidat_id:number):Promise<void>{
        await this.emploiRepository.delete(emplCandidat_id)
    }
}