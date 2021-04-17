import { BankData } from 'src/bankdata/entities/bankdata.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  companyName: string;

  @OneToOne(() => BankData)
  bankData: BankData;
}
