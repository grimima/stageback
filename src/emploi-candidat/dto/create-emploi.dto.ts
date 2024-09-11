
import {
    IsAlpha,
    IsEmail,
    IsNotEmpty,
    IsString,
    MinLength,
    IsOptional,
    IsPhoneNumber,
    IsBoolean, 
    IsAlphanumeric
  } from 'class-validator';


export class CreateEmploiDto {
    @IsString()
    @MinLength(2,{ message: 'Champ doit avoir 2 caractères au moins'})
    @IsAlpha(null, {
        message: ' Not allowed other than alpha.',
      })
    @IsNotEmpty()
    nom : string;


    @IsNotEmpty()
    @MinLength(2,{ message: 'Champ doit avoir 2 caractères au moins'})
    @IsAlpha(null, {
        message: ' Not allowed other than alpha.',
      })
    prenom: string;

    @IsNotEmpty()
    @IsEmail(null, { message: 'Please provide valid Email.' })
    email: string;

    @IsPhoneNumber('MA')
    @IsOptional()
    phoneNumber: number;

    @IsBoolean()
    @IsNotEmpty()
    connaissance:boolean;

    @IsOptional()
    @IsAlpha()
    source: string;

    @IsNotEmpty()
    @IsAlpha()
    posteNow : string;

    @IsNotEmpty()
    niveauDetude: string;

    @IsNotEmpty()
    experience:string;

    @IsOptional()
    @IsAlphanumeric()
    fourchette : string ;

    @IsOptional()
    @IsAlphanumeric()
    pretention: string;

    @IsOptional()
    preavis: string;

    @IsNotEmpty()
    region: string;

    @IsNotEmpty()
    selectedChoice : string;






}
