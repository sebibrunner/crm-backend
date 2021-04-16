import { Document } from 'src/document/entities/document.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Offer extends Document {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  offerDate: Date;
}
