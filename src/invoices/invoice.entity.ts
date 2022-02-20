import { Contact } from 'src/contacts/contact.entity';
import { Position } from 'src/positions/position.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('invoices')
export class Invoice{
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  invoicedate: Date;

  @OneToMany(type => Position, position => position.id)
  positions: Position[];

  @Column()
  receiver: Contact;
}