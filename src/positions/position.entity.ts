import { Invoice } from 'src/invoices/invoice.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @ManyToOne(type => Invoice, invoice => invoice.positions) invoice: Invoice;
}
