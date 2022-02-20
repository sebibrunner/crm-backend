import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('positions')
export class Position{
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  description: string;

  @Column()
  quantity: number;

  @Column()
  price: number;
}