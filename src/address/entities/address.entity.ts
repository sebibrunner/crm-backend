import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  zip: number;

  @Column()
  street: string;

  @Column()
  houseNumber: number;
}
