import { Invoice } from 'src/invoices/invoice.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToOne(type => Invoice, invoice => invoice.contact)
  invoice: Invoice;
}