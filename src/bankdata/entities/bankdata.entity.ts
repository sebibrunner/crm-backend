import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BankData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  iban: string;

  @Column()
  bankName: string;
}
