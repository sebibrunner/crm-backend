import { Contact } from 'src/contacts/contact.entity';
import { Position } from 'src/positions/position.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('invoices')
export class Invoice {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  invoicedate: Date;

  @OneToMany((type) => Position, (position) => position.id)
  positions: Position[];

  @OneToOne((type) => Contact, (receiver) => receiver.id, { cascade: true })
  receiver: Contact;
}
