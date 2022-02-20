import { Contact } from 'src/contacts/contact.entity';
import { Position } from 'src/positions/position.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('invoices')
export class Invoice{
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  invoicedate: Date;

  @Column()
  positions: Position[];

  @Column()
  receiver: Contact;
}