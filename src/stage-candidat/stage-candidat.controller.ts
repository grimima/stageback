import { Controller, Delete, Get, Post, Patch,  HttpCode, Header, Param} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { CandidatStage } from './entities/stage.entity';
import {Repository} from 'typeorm';


@Controller('stage-candidat')
export class StageCandidatController {
    constructor(@InjectRepository(CandidatStage) private readonly repository: Repository<CandidatStage>,){}
    @Get()
    async findAll(){
        const stage= await this.repository.find();
        return {}
    }

    @Get(':id')
    findOne(@Param('id') id:string): string{
        return 'This action returns a #${params.id} candidat'
    }

    @Post()
    create(): string{
        return 'Your application have been submitted successfully!';
    }

    @Patch()
    update(){}

    @Delete()
    remove(){}
}
