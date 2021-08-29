import { Contact } from 'src/contact/entities/contact.entity';
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

  @OneToOne(() => Contact)
  contact: Contact;

  @OneToOne(() => User)
  user: User;
}
