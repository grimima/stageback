import { Controller, Get, Render, Post  } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('index')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(){

  }
  @Render('index')
  root(){
    return { message : 'Salam a sat !'}
  }
}
