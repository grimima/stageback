import {registerAs} from '@nestjs/config'
import {TypeOrmModuleOptions } from '@nestjs/typeorm';


export default registerAs('database',() : TypeOrmModuleOptions=>({
    type: 'postgres',
    host: process.env.DB_HOST,
    port : Number(process.env.DB_PORT) || 5432,
    username : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    autoLoadEntities: true,
})
);