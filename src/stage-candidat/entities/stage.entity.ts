import { SelectedChoice } from 'src/enums/enum';
import { Column, Entity, PrimaryGeneratedColumn, OneToOne} from 'typeorm';

@Entity()
export class CandidatStage{
    @PrimaryGeneratedColumn()
    stgCandidat_id : number;

    @Column({ type: 'varchar', length: 30 })
    nom:string;

    @Column({ type: 'varchar', length: 30 })
    prenom:string;

    @Column({ type: 'varchar', length: 40 })
    email:string;

    @Column({ type: 'int' })
    phoneNumber: number;

    @Column({ type: 'enum', enum: ['NonConventioné', 'PFE', 'Apprentissage', 'Observation'] })
    typeStage: string;

    @Column({ type: 'enum', enum: ['1A', '2A', '3A', '4A', '5A']})
    anneeDetude: string

    @Column({ type: 'enum', enum : SelectedChoice})
    selectedChoice:string;
}