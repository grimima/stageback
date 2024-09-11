
import {
    IsEmail,
    IsNotEmpty,
    IsString,
    MinLength,
    IsAlpha,
    IsOptional,
    IsPhoneNumber
  } from 'class-validator';


export class CreateStageDto {
    @IsString()
    @MinLength(2,{ message: 'Champ doit avoir 2 caractères au moins'})
    @IsAlpha(null, {
        message: ' Not allowed other than alpha characters.',
      })
    @IsNotEmpty()
    nom : string;


    @IsNotEmpty()
    @MinLength(2,{ message: 'Champ doit avoir 2 caractères au moins'})
    @IsAlpha(null, {
        message: ' Not allowed other than alpha characters.',
      })
    prenom: string;

    @IsNotEmpty()
    @IsEmail(null, { message: 'Please provide valid Email.' })
    email: string;

    @IsPhoneNumber('MA')
    @IsOptional()
    phoneNumber: number;

    @IsAlpha()
    @IsNotEmpty()
    typeStage : string;

    @IsAlpha()
    @IsNotEmpty()
    anneeDetude : string;


    @IsAlpha()
    @IsNotEmpty()
    selectedChoice: string;
    
}
