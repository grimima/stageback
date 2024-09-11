import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StageCandidatController } from './stage-candidat/stage-candidat.controller';
import { EmploiCandidatController } from './emploi-candidat/emploi-candidat.controller';
import { StageCandidatService } from './stage-candidat/stage-candidat.service';
import { EmploiCandidatService } from './emploi-candidat/emploi-candidat.service';
import { StageCandidatModule } from './stage-candidat/stage-candidat.module';
import { EmploiCandidatModule } from './emploi-candidat/emploi-candidat.module';
import databaseConfig from './config/database.config';
import { DataSource } from 'typeorm';
import { StageHttpmodule } from './stage-candidat/stage-candidat-http.module';
import configuration from './config/configuration';
import {TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true,cache: true,load:[databaseConfig,configuration], envFilePath:'.env'}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.database'),
        synchronize: configService.get<boolean>('database.synchronize', false),
        autoLoadEntities: true,  // Automatically load entities
      }),}),
    StageCandidatModule,
    EmploiCandidatModule,
    StageHttpmodule,
  ],
  controllers: [AppController, StageCandidatController, EmploiCandidatController],
  providers: [AppService, StageCandidatService, EmploiCandidatService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

