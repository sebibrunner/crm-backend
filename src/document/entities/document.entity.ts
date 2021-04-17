import { Customer } from 'src/customer/entities/customer.entity';
import { Position } from 'src/position/entities/position.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
@Entity()
export class Document {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Position, (position) => position.id)
  positions: Position[];

  @OneToOne(() => Customer)
  customer: Customer;

  @OneToOne(() => User)
  user: User;
}
