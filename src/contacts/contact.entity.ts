import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('contacs')
export class Contact{
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  prename: string;

  @Column()
  surname: string;

  @Column()
  street: string;

  @Column()
  streetnumber: string;

  @Column()
  city: string;

  @Column()
  zip: number;
}