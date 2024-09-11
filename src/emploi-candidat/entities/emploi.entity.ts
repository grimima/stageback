import { Regions, SelectedChoice } from 'src/enums/enum';
import{Column, Entity, PrimaryGeneratedColumn, OneToOne} from 'typeorm';

@Entity()
export class CandidatEmploi{
    @PrimaryGeneratedColumn()
    emplCandidat_id : number;

    @Column({ type: 'varchar', length: 30 })
    nom:string;

    @Column({ type: 'varchar', length: 30 })
    prenom:string;

    @Column({ type: 'varchar', length: 40 })
    email:string;

    @Column({ type: 'int' })
    phoneNumber: number;

    @Column({default: false})
    connaissance:boolean;

    @Column({type: 'enum', enum : ['Candidature spontanée','Candidature spontanée sur siège','Linkedin','Forum','Autres']})
    source: string;

    @Column({ type: 'varchar', length: 20 })
    posteNow: string;

    @Column({ type: 'varchar', length: 10 })
    fourchette: string;

    @Column({ type: 'varchar', length: 10 })
    pretention: string;

    @Column({ type: 'varchar', length: 10 })
    preavis:string;

    @Column({ type: 'enum', enum: Regions })
    region:string;

    @Column({ type: 'enum',enum:SelectedChoice})
    selectedChoice:string;


}