import { Contact } from 'src/contacts/contact.entity';
import { Position } from 'src/positions/position.entity';
import {
  Column,
  Entity,
  JoinColumn,
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

  @OneToMany(type => Position, position => position.invoice, { eager: true, cascade: true })
  positions: Position[];

  @OneToOne(type => Contact, contact => contact.invoice, { eager: true, cascade: true })
  @JoinColumn()
  contact: Contact;

}
