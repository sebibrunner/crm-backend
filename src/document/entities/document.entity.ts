import { Customer } from 'src/customer/entities/customer.entity';
import { Position } from 'src/position/entities/position.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Document {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  positions: Position[];

  @Column()
  customer: Customer;

  @Column()
  user: User;
}
