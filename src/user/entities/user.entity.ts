import { Company } from 'src/company/entities/company.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @OneToOne(() => Company)
  company: Company;

  @Column()
  password: string;
}
