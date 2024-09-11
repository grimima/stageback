import { Controller, Delete, Get, Post, Patch,HttpCode, Header, Param } from '@nestjs/common';


@Controller('emploi-candidat')
export class EmploiCandidatController {
    @Get()
    findAll(){}

    @Get(':id')
    findOne(@Param('id') id:string){
        return 'retrieval succeful !'
    }

    @Post()
    @HttpCode(2009)
    @Header('customize-header', 'access only')
    create(): string{
        return 'Your application have been submitted successfully!';
    }

    @Patch()
    update(){}

    @Delete()
    remove(){}
}
