import { Contact } from 'src/contact/entities/contact.entity';
import { Position } from 'src/position/entities/position.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  Column,
} from 'typeorm';
@Entity()
export class Document {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Position, (position) => position.id)
  positions: Position[];

  @Column()
  isInvoice: Boolean;

  @Column()
  isOffer: Boolean;

  @OneToOne(() => Contact)
  contact: Contact;

  @OneToOne(() => User)
  user: User;

  @Column()
  date: Date;
  
}
