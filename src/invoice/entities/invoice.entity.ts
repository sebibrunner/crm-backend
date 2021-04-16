import { Document } from 'src/document/entities/document.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Invoice extends Document {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  invoiceDate: Date;

  @Column()
  isPaid: boolean;
}
